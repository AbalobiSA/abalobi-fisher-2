import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Logbook} from "../../../classes/fisher/logbook.class";
import {LogbookTripTypePage} from "../logbook-trip-type/logbook-trip-type";
import {LogbookTripLocationPage} from "../logbook-trip-location/logbook-trip-location";
import {LogbookProvider} from "../../../providers/logbook/logbook";

/**
 * Generated class for the LogbookTripExistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-logbook-trip-exists',
    templateUrl: 'logbook-trip-exists.html',
})
export class LogbookTripExistsPage {

    logbook: Logbook;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public log: LogbookProvider) {
        this.logbook = log.logbook;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LogbookTripExistsPage');
    }

    next(): void {
        // this.navCtrl.push(LogbookTripExistsPage, {}, {animate: true, direction: 'forward'});
        // If trip exists, go to the boat / shore page.
        // Otherwise, go straight to the home/other page.

        if (this.logbook.tripdetails.trip_exists === true) {
            this.navCtrl.push(LogbookTripTypePage, {}, {animate: true, direction: 'forward'});
        } else {
            this.navCtrl.push(LogbookTripLocationPage, {}, {animate: true, direction: 'forward'});
        }
    }

}
