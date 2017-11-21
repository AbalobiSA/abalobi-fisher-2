import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Logbook} from "../../../classes/fisher/logbook.class";
import {LogbookProvider} from "../../../providers/logbook/logbook";
import {DataProvider} from "../../../providers/data/data";
import {User} from "../../../classes/fisher/user.class";
import {CommunityData} from "../../../classes/data/communities.data.class";

/**
 * Generated class for the LogbookTripLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-logbook-trip-location',
    templateUrl: 'logbook-trip-location.html',
})
export class LogbookTripLocationPage {

    logbook: Logbook;
    mainUser: User;
    communities: CommunityData = new CommunityData();

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public log: LogbookProvider,
                public user: DataProvider) {
        this.logbook = log.logbook;
        this.mainUser = user.currentUser;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LogbookTripLocationPage');
    }

    next(): void {
        if (this.logbook.tripdetails.trip_home_community === true) {
            this.logbook.tripdetails.trip_location = this.mainUser.full_community_info.name_key;
            // this.navCtrl.push(LogbookTripTypePage, {}, {animate: true, direction: 'forward'});
        } else {
            // this.navCtrl.push(LogbookTripLocationPage, {}, {animate: true, direction: 'forward'});
        }
    }

}
