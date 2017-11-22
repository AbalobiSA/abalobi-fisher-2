import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AnalyticsTrip} from "../../classes/analytics/AnalyticsTrip";
import moment from 'moment';

/**
 * Generated class for the AnalyticsTripsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'analytics-trips-list',
    templateUrl: 'analytics-trips-list.html'
})
export class AnalyticsTripsListComponent {

    text: string;
    @Input() trips: AnalyticsTrip[];
    @Output() tripView = new EventEmitter<any>();

    constructor() {
        console.log('Hello AnalyticsTripsListComponent Component');
        this.text = 'Hello World';
    }

    handleTripView(trip: any): void {
        console.log("emitting trip: ", trip);
        this.tripView.emit(trip);
    }

    tripDate(trip: any): string {
        return moment(trip.trip_date__c).format('dddd')
            + " - " + moment(trip.trip_date__c).locale('en-gb').format('L');
    }

}
