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

    income: Number;
    expense: Number;

    validCosts = ['cost_bait__c', 'cost_food__c', 'cost_fuel__c', 'cost__harbour_fee__c', 'cost_oil__c', 'cost_other_amount__c', 'cost_transport__c'];
    costs = {};

    constructor() {
        console.log('Hello FinanceComponent Component');
    }

    ngOnChanges(changes) {
        if (!!this.trips) {
            this.calcIncomeExpense();
        }
    }

    calcIncomeExpense() {
        this.income = 0;
        this.expense = 0;

        for (let validCost of this.validCosts) {
            let cost = this.trips.map(item => item[validCost] || 0.0).reduce((prev, x) => (prev || 0.0) + x);

            this.costs[validCost] = cost;
            this.expense += cost;
        }
    }

    prettyCost(item: string) {
        return item.replace('cost_', '').replace('__c', '').split('_').map(part => {
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join(' ');
    }
}
