import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Logbook} from "../../../classes/fisher/logbook.class";
import {LogbookProvider} from "../../../providers/logbook/logbook";
import {LogbookTripLocationPage} from "../logbook-trip-location/logbook-trip-location";

/**
 * Generated class for the LogbookTripTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-logbook-trip-type',
    templateUrl: 'logbook-trip-type.html',
})
export class LogbookTripTypePage {

    logbook: Logbook;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public log: LogbookProvider) {
        this.logbook = log.logbook;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LogbookTripTypePage');
    }

    next(): void {
        this.navCtrl.push(LogbookTripLocationPage, {}, {animate: true, direction: 'forward'});
    }

}
