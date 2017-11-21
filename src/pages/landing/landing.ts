import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";
import {RegisterHomePage} from "../register-home/register-home";
import {AuthProvider} from "../../providers/auth/auth";
import {UserProvider} from "../../providers/user/user";
import {LoaderProvider} from "../../providers/loader.service";
import {User} from "../../classes/fisher/user.class";
import {Storage} from "@ionic/storage";
import {OdkProvider} from "../../providers/odk/odk";

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html',
})
export class LandingPage {

    GLOBAL_CACHED_USER: User;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public auth: AuthProvider,
                public fisher: UserProvider,
                public loader: LoaderProvider,
                public storage: Storage,
                public odk: OdkProvider) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LandingPage');
        // this.loginBrowser();
    }

    ionViewDidEnter() {
        // Check for a saved user.
        this.storage.get("cachedUser")
            .then(cachedUser => {
                // If saved user exists, login with saved offline information.
                console.log(cachedUser);
                if (cachedUser !== undefined && cachedUser !== null && cachedUser !== "") {
                    this.GLOBAL_CACHED_USER = cachedUser;
                    this.fisher.currentUser = cachedUser;
                    // this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
                    // return;
                }
            })
            .catch(ex => console.log(ex));
    }

    login(): void {
        // Using the auth token, Query the server for the user's actual fisher data
        // this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
        this.loginMobile();
    }

    unlock(): void {
        this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
    }

    register(): void {
        this.navCtrl.push(RegisterHomePage, {}, {animate: true, direction: 'forward'});
    }

    loginMobile(): void {
        let cacheFisher: User;
        let _token;

        this.auth.loginPromise()
            .then(done => {
                console.log("WE HAVE RESOLVED");
                this.loader.presentLoader("Logging in. Please wait...");
                const token = window.localStorage.getItem('access_token');
                console.log(token);
                _token = token;
                return this.setupFisher(token);
            })
            .then(() => {})
            .catch(ex => { console.log(ex); });
    }

    loginBrowser(): void {
        this.loader.presentLoader("Logging in. Please wait...");
        window.localStorage.setItem("access_token", "5ijpyrL_kYqCOr2wpVwBcESynhfrw3kx");
        const token = window.localStorage.getItem("access_token");

        let cacheFisher;
        this.setupFisher(token)
            .then(() => {})
            .catch(ex => console.log(ex));
    }

    setupFisher(token: string): Promise<any> {
        let cacheFisher: User;
        return this.fisher.getUserInfo(token)
            .then(fisher => {
                cacheFisher = fisher;
                this.loader.dismissLoader();
                return this.storage.set("cachedUser", cacheFisher);
            })
            .then(() => this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'}))
            .then(() => {
                return this.odk.writeSettings(cacheFisher.Username__c, cacheFisher.password)
            })
            .then(() => console.log("WROTE SETTINGS!!!"))
            .catch(ex => {
                console.log(ex);
                this.loader.dismissLoader();
            });
    }
}
