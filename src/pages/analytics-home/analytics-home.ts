import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AnalyticsTripViewPage} from "./analytics-trip-view/analytics-trip-view";
import {AnalyticsTrip} from "../../classes/analytics/AnalyticsTrip";
import {DataProvider} from "../../providers/data/data";
import moment from 'moment';

@Component({
    selector: 'page-analytics-home',
    templateUrl: 'analytics-home.html'
})
export class AnalyticsHomePage {

    menu: string = "1";

    constructor(public navCtrl: NavController,
                public data: DataProvider) {

    }

    ionViewDidEnter(): void {
        this.data.getTripLog()
            .then(trips => {

            })
            .catch(ex => {
                console.log(ex);
            })
    }

    today(): string {
        return (new Date()).toDateString();
    }

    tripView(trip: any): void {
        console.log("received trip params: ", trip);
        this.navCtrl.push(AnalyticsTripViewPage, {trip}, {animate: true, direction: 'forward'});
    }

    tripDate(trip: any): string {
        return moment(trip.trip_date__c).format('dddd')
            + " - " + moment(trip.trip_date__c).locale('en-gb').format('L');
    }
}
