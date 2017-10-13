import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {OnInit} from "@angular/core";
import {ErrorsProvider} from "../../providers/errors/errors";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

let cordova: any;

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    app_version: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform,
                public errors: ErrorsProvider) {
    }

    ngOnInit() {

    }

    ionViewDidLoad() {
        // console.log('ionViewDidLoad SettingsPage');
        this.platform.ready().then(() => {
            try {
                (window as any).cordova.getAppVersion.getVersionNumber().then((version) => {
                    this.app_version = version;
                });
            } catch (ex) {
                console.log("settings page: error getting app version.");
                console.log("settings page: ", ex);
                this.errors.presentToast(ex);
                this.app_version = "Browser";
            }
        })
    }

    ionViewDidEnter() {

    }

}
