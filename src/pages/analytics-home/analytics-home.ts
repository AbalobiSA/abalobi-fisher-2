import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AnalyticsTripViewPage} from "./analytics-trip-view/analytics-trip-view";

@Component({
    selector: 'page-analytics-home',
    templateUrl: 'analytics-home.html'
})
export class AnalyticsHomePage {

    menu: string = "trips";

    constructor(public navCtrl: NavController) {

    }

    today(): string {
        return (new Date()).toDateString();
    }

    tripView(trip: string): void {
        this.navCtrl.push(AnalyticsTripViewPage, {trip}, {animate: true, direction: 'forward'});
    }

}
