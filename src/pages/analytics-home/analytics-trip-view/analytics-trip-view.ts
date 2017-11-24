import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the AnalyticsTripViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-analytics-trip-view',
    templateUrl: 'analytics-trip-view.html',
})
export class AnalyticsTripViewPage {

    trip: string;



    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.trip = this.navParams.get("trip");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AnalyticsTripViewPage');
    }

    viewTrip(trip: any): string {
        return JSON.stringify(trip, null, 4);
    }

    getKeyItems(trip: any) {
        const items = [];
        for (const key in trip) {
            if (trip.hasOwnProperty(key) && trip[key] !== null) {
                items.push({
                    key,
                    value: trip[key]
                })
            }
        }
        return items;
    }

    tripDate(trip: any): string {
        return moment(trip.trip_date__c).format('dddd')
            + " - " + moment(trip.trip_date__c).locale('en-gb').format('L');
    }

}
