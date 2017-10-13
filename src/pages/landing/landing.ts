import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";

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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LandingPage');
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
