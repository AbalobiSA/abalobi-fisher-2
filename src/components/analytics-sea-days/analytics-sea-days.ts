import {Component, Input, EventEmitter, Output} from '@angular/core';
import moment from 'moment';
import _ from 'lodash';

/**
 * Generated class for the AnalyticsSeaDaysComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'analytics-sea-days',
    templateUrl: 'analytics-sea-days.html'
})
export class AnalyticsSeaDaysComponent {
    @Input() trips: any;
    @Input() selectedDate: string;

    days_fishing: number;
    days_not_fishing: number;
    trips_with_catches: number;

    constructor() {
        console.log('Hello AnalyticsSeaDaysComponent Component');
        this.calculateSeaDays();
    }

    ngOnChanges(changes) {
        this.calculateSeaDays();
    }

    calculateSeaDays(): void {
        if (!this.trips) {
            return;
        }

        // Get the number of days in the selected month
        // Count the unique number of days in the trips array
        this.days_fishing = this.trips
            .filter(trip => trip.trip_has__c === "yes")
            .length;

        this.days_not_fishing = daysInMonth(this.selectedDate) - this.days_fishing;

        this.trips_with_catches = this.trips
            .filter(trip => trip.catch_has__c === "yes")
            .length;

    }
}

const daysInMonth = (MONTH_BASE_ONE) => {
    let days = moment(MONTH_BASE_ONE).daysInMonth();
    // console.log("debug: days in month: ", days);
    return days;
};
