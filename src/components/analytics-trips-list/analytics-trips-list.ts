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
    @Input() authenticated: boolean = true;
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

    getTripIcon(trip: any): string {
        if (trip['rpt_catches'].length !== 0) {
            return "boat";
        }
    }

    getWeatherIcon(trip: any): string {
        switch (trip['weather__c']) {
            case "weather_rainy" : return "rainy";
            case "weather_sunny" : return "sunny";
            case "weather_cloudy" : return "cloudy";
            case "weather_partlycloudy" : return "partly-sunny";
            default: return "weather_sunny";
        }
    }

}
