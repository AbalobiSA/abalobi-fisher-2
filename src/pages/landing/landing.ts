import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";
import {RegisterHomePage} from "../register-home/register-home";
import {AuthProvider} from "../../providers/auth/auth";
import {UserProvider} from "../../providers/user/user";
import {LoaderProvider} from "../../providers/loader.service";

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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public auth: AuthProvider,
        public fisher: UserProvider,
        public loader: LoaderProvider
    ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LandingPage');
    }

    login(): void {

        // Using the auth token, Query the server for the user's actual fisher data
        // this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});

        this.loader.presentLoader("Logging in. Please wait...");

        // this.auth.loginPromise()
        //     .then(done => {
        //         console.log("WE HAVE RESOLVED");
        //
        //         const token = window.localStorage.getItem('access_token');
        //         console.log(token);
        //         return this.fisher.getUserInfo(token)
        //     })
        //     .then(fisher => {
        //      this.loader.dismissLoader();
        //         this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
        //     })
        //     .catch(ex => {
        //          console.log(ex)
        //          this.loader.dismissLoader();
        //     });

        this.fisher.getUserInfo("ys57a8kBmCCrcmBrOP-FhwAY9A-pr8xF")
            .then(fisher => {
                this.loader.dismissLoader();
                this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
            })
            .catch(ex => {
                console.log(ex);
                this.loader.dismissLoader();
            });
    }

    register(): void {
        this.navCtrl.push(RegisterHomePage, {}, {animate: true, direction: 'forward'});
    }

    // register(): void {
    //     this.navCtrl.push(RegisterPage, {}, {animate: true, direction: 'forward'});
    // }
    //
    // navigate_home(user: User): void {
    //     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    // }

}
