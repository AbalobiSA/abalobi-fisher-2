import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogbookTripLocationShorespotsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logbook-trip-location-shorespots',
  templateUrl: 'logbook-trip-location-shorespots.html',
})
export class LogbookTripLocationShorespotsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogbookTripLocationShorespotsPage');
  }

}
