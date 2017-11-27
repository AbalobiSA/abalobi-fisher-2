import {Component, Input, OnChanges} from '@angular/core';
import {AnalyticsTrip} from "../../classes/analytics/AnalyticsTrip";


/**
 * Generated class for the FinanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'finance',
    templateUrl: 'finance.html',

    inputs: ['trips']
})
export class FinanceComponent implements OnChanges {

    @Input() trips: AnalyticsTrip[];
    @Input() authenticated: boolean = true;

    totalIncome: Number;
    totalExpense: Number;

    validCosts = [
        'cost_bait__c',
        'cost_food__c',
        'cost_fuel__c',
        'cost__harbour_fee__c',
        'cost_oil__c',
        'cost_other_amount__c',
        'cost_transport__c'
    ];

    // Used to decide what to show for income and expenses in view
    species = [];
    costs = [];

    // The income and expense values
    expense = {};
    income = {};

    chartType = 'pie';

    expenseChartData = [{data: []}];
    expenseChartLabels = [];

    incomeChartData = [{data: []}];
    incomeChartLabels = [];

    constructor() {
        console.log('Hello FinanceComponent Component');
    }

    ngOnChanges(changes) {
        console.log("finance component: trips: ", this.trips);

        if (!!this.trips) {
            this.calcIncomeExpense();
        }
    }

    calcIncomeExpense() {
        this.totalIncome = 0;
        this.totalExpense = 0;

        this.expenseChartData[0] = {data: []};
        this.expenseChartLabels = [];

        this.incomeChartData[0] = {data: []};
        this.incomeChartLabels = [];

        this.costs = [];
        this.species = [];

        for (let validCost of this.validCosts) {
            let cost;
            cost = this.trips.map(item => item[validCost] || 0.0).reduce((prev, x) => prev + x, 0);

            this.expense[validCost] = cost;
            this.totalExpense += cost;

            if (cost > 0) {
                this.expenseChartData[0]['data'].push(cost);
                this.expenseChartLabels.push(this.prettyExpense(validCost));

                this.costs.push(validCost);
            }
        }

        let groupedBySpecies = this.trips.map(trip => trip['rpt_catches']).reduce((prev, x) => {
            for (let c of x) {
                if (c['species_name'] in prev) {
                    prev[c['species_name']].push(c);
                } else {
                    prev[c['species_name']] = [c];
                }
            }

            return prev;
        }, {});

        for (let species of groupedBySpecies) {
            let income = 0;

            this.species.push(this.species);
            this.income[species] = {
                income: {
                    'Sold Crates': 0,
                    'Sold Number': 0,
                    'Sold Weight': 0
                },
                image: ''
            };

            for (let c of groupedBySpecies[species]) {
                let soldCrates = (c['alloc_sold_crates__c'] || 0) * (c['other_price_per_crate__c'] || 0);
                let soldNumber = (c['alloc_sold_number__c'] || 0) * (c['other_price_per_number__c'] || 0);
                let soldWeight = (c['alloc_sold_weight_kg__c'] || 0) * (c['other_price_per_kg__c'] || 0);

                this.income[species]['totalIncome']['Sold Crates'] += soldCrates;
                this.income[species]['totalIncome']['Sold Number'] += soldNumber;
                this.income[species]['totalIncome']['Sold Weight'] += soldWeight;

                income = income + soldCrates + soldNumber + soldWeight;
            }

            if (income > 0) {
                this.incomeChartLabels.push(species);
                this.incomeChartData[0]['data'].push(income);
            }
        }
    }

    prettyExpense(item: string) {
        return item.replace('cost_', '').replace('__c', '').split('_').map(part => {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }
}
