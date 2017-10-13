import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

let startApp: any;

/**
 * Generated class for the StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-start',
    templateUrl: 'start.html',
})
export class StartPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad StartPage');
    }

    startODK(): void {
        let sApp = startApp.set({
            /* params */
            "package": "org.odk.collect.android",
            "intentstart": "startActivity"
        }, {/* extras */});

        sApp.check((values) => { /* success */
            console.log(values);
        }, (error) => { /* fail */
            let x = window.confirm("You need OpenDataKit to log your catch, but it is not installed. " +
                "\n\nWould you like to install it now using the Google Play Store?");
            if (x === true) {
                window.open('https://play.google.com/store/apps/details?id=org.odk.collect.android', '_system')
            }
        });


        sApp.start((success) => {
            console.log(success);
        }, (error) => {
            console.log(error);
        })
    }

    startAnalytics(): void {

    }

    startTelegram(): void {

    }

    startCalculator(): void {

    }

    openSettings(): void {

    }

    setupFisherApp(): void {

    }

    openHelp(): void {

    }


}
