import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {OnInit} from "@angular/core";
import {ErrorsProvider} from "../../providers/errors/errors";
import {AlertController} from 'ionic-angular';
import {LandingPage} from "../landing/landing";
import {AuthProvider} from "../../providers/auth/auth";
import {User} from "../../classes/fisher/user.class";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

let cordova: any;

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    app_version: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public platform: Platform,
        public errors: ErrorsProvider,
        public alertCtrl: AlertController,
        public auth: AuthProvider,
        public fisher: UserProvider
    ) {

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

    presentLogoutModal(): void {
        let confirm = this.alertCtrl.create({
            title: 'Logout?',
            message: 'Are you sure you want to log out? This will clear your saved username and password, and you ' +
            'will have to type it in again next time you log in.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: () => {
                        console.log('Agree clicked');
                        this.logout();
                    }
                }
            ]
        });
        confirm.present();
    }

    logout(): void {
        let rootNav = this.getRootNav(this.navCtrl);
        this.auth.logout();
        rootNav.setRoot(LandingPage, {}, {animate: true, direction: 'backward'});
    }

    /**
     * Get the very first navcontroller
     * to navigate away from the tabs page
     * @param {NavController} nav
     * @returns {NavController}
     */
    getRootNav(nav: NavController): NavController {
        let root = nav;
        while (root.parent != null) {
            root = root.parent;
        }
        return root;
    }

}
