import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";

/**
 * Generated class for the RegisterContactDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register-contact-details',
    templateUrl: 'register-contact-details.html',
})
export class RegisterContactDetailsPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterContactDetailsPage');
    }

    continue(): void {
        // this.navCtrl.push(RegisterContactDetailsPage, {}, {animate: true, direction: 'forward'});
    }

}
