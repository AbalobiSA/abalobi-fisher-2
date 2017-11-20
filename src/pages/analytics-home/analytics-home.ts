import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

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

}
