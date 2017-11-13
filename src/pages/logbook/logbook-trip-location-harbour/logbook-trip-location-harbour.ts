import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LogbookTripLocationHarbourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-logbook-trip-location-harbour',
    templateUrl: 'logbook-trip-location-harbour.html',
})
export class LogbookTripLocationHarbourPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LogbookTripLocationHarbourPage');
    }

}
