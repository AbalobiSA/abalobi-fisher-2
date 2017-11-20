import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

}
