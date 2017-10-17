import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../providers/registration/registration.provider";
import {RegisterAgreementPage} from "./register-agreement/register-agreement";

/**
 * Generated class for the RegisterHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register-home',
    templateUrl: 'register-home.html',
})
export class RegisterHomePage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider) {

        // If navigating from the home screen,
        // Clear the registration
        this.reg.clearRegistration();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterHomePage');
    }

    continue(): void {
        this.navCtrl.push(RegisterAgreementPage, {}, {animate: true, direction: 'forward'});
    }

}
