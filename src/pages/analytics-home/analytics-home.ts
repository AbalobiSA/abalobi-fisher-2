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

    selectedDate: String;
    trips: AnalyticsTrip[];

    user_is_authenticated: boolean = true;

    constructor(
        public navCtrl: NavController,
        public data: DataProvider) {

        let now = new Date();
        this.selectedDate = [now.getFullYear(), now.getMonth() + 1].join('-');
    }

    ionViewDidEnter(): void {
        this.getDataForMonth();
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
            + " - "
            + moment(trip.trip_date__c).locale('en-gb').format('L');
    }

    getDataForMonth() {
        this.trips = null;

        const chosenYear = this.selectedDate.split('-')[0];
        const chosenMonth = parseInt(this.selectedDate.split('-')[1]) - 1;

        this.data.getTripLog(chosenYear, chosenMonth)
            .then(result => {
                this.trips = result;
                this.user_is_authenticated = true;
            })
            .catch(err => {
                if (err['status'] === 500) {
                    // User is not authenticated
                    this.user_is_authenticated = false;
                }
            });
    }
}
