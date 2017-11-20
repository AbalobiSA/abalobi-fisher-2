import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Platform} from "ionic-angular";
import {AppstarterProvider} from "../../providers/appstarter/appstarter";
import {AuthProvider} from "../../providers/auth/auth";
import {LogbookNewPage} from "../logbook/logbook-new/logbook-new";
import {User} from "../../classes/fisher/user.class";

let startApp: any;

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    constructor(public navCtrl: NavController, public navParams: NavParams,
                public platform: Platform, public appstarter: AppstarterProvider,
                public auth: AuthProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    startODK(): void {

        // this.appstarter.start(
        //     "org.odk.collect.android",
        //     "You need OpenDataKit to log your catch, but it is not installed. " +
        //                     "\n\nWould you like to install it now using the Google Play Store?",
        //     'https://play.google.com/store/apps/details?id=org.odk.collect.android'
        // );

        this.navCtrl.push(LogbookNewPage, {}, {animate: true, direction: 'forward'});
    }

    startAnalytics(): void {
        this.appstarter.start(
            "com.abalobi.fisheranalytics",
            "You need Abalobi Fisher Analytics, but it is not installed. " +
            "\n\nWould you like to install it now using the Google Play Store?",
            'https://play.google.com/store/apps/details?id=com.abalobi.fisheranalytics'
        );
    }

    startTelegram(): void {
        this.appstarter.start(
            "org.telegram.messenger",
            "You need Telegram for messaging, but it is not installed. " +
            "\n\nWould you like to install it now using the Google Play Store?",
            'https://play.google.com/store/apps/details?id=org.telegram.messenger'
        );
    }

    startCalculator(): void {
        this.appstarter.start(
            "com.android.calculator2"
        );
    }

    openSettings(): void {

    }

    setupFisherApp(): void {

    }

    openHelp(): void {

    }


}
