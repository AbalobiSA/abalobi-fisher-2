import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    login(): void {
        // this.
        this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    }

    // register(): void {
    //     this.navCtrl.push(RegisterPage, {}, {animate: true, direction: 'forward'});
    // }
    //
    // navigate_home(user: User): void {
    //     this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    // }

}
