import {Component, Input, OnChanges} from '@angular/core';
import {AnalyticsTrip} from "../../classes/analytics/AnalyticsTrip";
import _ from 'lodash';


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

    totalIncome: number;
    totalExpense: number;

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
    chartOptions = {
        responsive: true,
        legend: {
            onClick: function(event, legendItem) {}
        }
    };

    expenseChartData = [{data: []}];
    expenseChartLabels = [];

    incomeChartData = [{data: []}];
    incomeChartLabels = [];

    constructor() {
        console.log('Hello FinanceComponent Component');
    }

    ngOnChanges(changes) {
        console.log("finance component: trips: ", this.trips);
        this.income = _.clone({});

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

        let groupedBySpecies = this.trips.map(trip => trip['rpt_catches'])
            .reduce((prev, x) => {

            for (let c of x) {
                if (c['species_name'] in prev) {
                    prev[c['species_name']].push(c);
                } else {
                    prev[c['species_name']] = [c];
                }
            }

            return prev;
        }, {});

        // console.log("debug: logging grouped by species: ", groupedBySpecies);

        // Run through each species
        for (let species of Object.keys(groupedBySpecies)) {
            let income = 0;

            this.species.push(species);
            this.income[species] = {
                totalIncome : {
                    sold_crates : 0,
                    sold_number : 0,
                    sold_weight : 0
                },
                image: ''
            };

            for (let c of groupedBySpecies[species]) {

                // console.log("debug: logging catch: ", c);

                let soldCrates = (c['alloc_sold_crates__c'] || 0) * (c['other_price_per_crate__c'] || 0);
                let soldNumber = (c['alloc_sold_number__c'] || 0) * (c['other_price_per_item__c'] || 0);
                let soldWeight = (c['alloc_sold_weight_kg__c'] || 0) * (c['other_price_per_kg__c'] || 0);

                this.income[species]['totalIncome']['sold_crates'] += soldCrates;
                this.income[species]['totalIncome']['sold_number'] += soldNumber;
                this.income[species]['totalIncome']['sold_weight'] += soldWeight;

                income = income + soldCrates + soldNumber + soldWeight;
            }

            this.totalIncome += income;

            if (income > 0) {
                this.incomeChartLabels.push(species);
                this.incomeChartData[0]['data'].push(income);
            }

            console.log()
        }

        console.log("debug: logging income object: ", JSON.stringify(this.income, null, 4));

        // Calculate total income
        // console.log("debug: logging income variable: ", income);
    }

    prettyExpense(item: string) {
        return item.replace('cost_', '').replace('__c', '').split('_').map(part => {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }

    incomeExists(): boolean {
        return (!!this.totalIncome && this.totalIncome !== 0 && this.totalIncome !== null);
        // <div>Sold Crates: R {{this.income['totalIncome']['Sold Crates']}}</div>
        // <div>Sold Number: R {{this.income['totalIncome']['Sold Number']}}</div>
        // <div>Sold Weight: R {{this.income['totalIncome']['Sold Weight']}}</div>
        // const filteredSpecies = this.species.filter(item => {
        //     return item['']
        // })
    }

    getIncomeBySpecies(): any {
        const incomeBySpecies = [];
        for (const speciesKey of Object.keys(this.income)) {
            const crates = this.income[speciesKey]['totalIncome']['sold_crates'] || 0;
            const items = this.income[speciesKey]['totalIncome']['sold_number'] || 0;
            const weight = this.income[speciesKey]['totalIncome']['sold_weight'] || 0;

            const speciesObject = {
                name: speciesKey,
                income: crates + items + weight
            };

            incomeBySpecies.push(speciesObject);
        }
        return incomeBySpecies;
    }
}
