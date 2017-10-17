import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {TabsPage} from "../tabs/tabs";

import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html',
})
export class LandingPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
        if (this.auth.isAuthenticated()) {
            this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
        } else {
            this.auth.clearSession();
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LandingPage');
    }

    // login(): void {
    //     // this.
    //     this.navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
    // }

    // register(): void {
    //     this.navCtrl.push(RegisterPage, {}, {animate: true, direction: 'forward'});
    // }
    //
    // navigate_home(user: User): void {
    //     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    // }
}
