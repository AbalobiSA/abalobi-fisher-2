import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";
import {RegisterPersonalDetailsPage} from "../register-personal-details/register-personal-details";

/**
 * Generated class for the RegisterAgreementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-register-agreement',
    templateUrl: 'register-agreement.html',
})
export class RegisterAgreementPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterAgreementPage');
    }

    continue(): void {
        this.navCtrl.push(RegisterPersonalDetailsPage, {}, {animate: true, direction: 'forward'});
    }

}
