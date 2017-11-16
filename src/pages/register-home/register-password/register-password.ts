import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";
import {RegisterFisherInfoPage} from "../register-fisher-info/register-fisher-info";

/**
 * Generated class for the RegisterPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-register-password',
    templateUrl: 'register-password.html',
})
export class RegisterPasswordPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPasswordPage');
    }

    continue(): void {
        this.navCtrl.push(RegisterFisherInfoPage, {}, {animate: true, direction: 'forward'});
    }

}
