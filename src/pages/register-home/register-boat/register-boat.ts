import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";

/**
 * Generated class for the RegisterBoatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register-boat',
    templateUrl: 'register-boat.html',
})
export class RegisterBoatPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterBoatPage');
    }

    customFormValid(): boolean {
        let valid = true;

        if (this.reg.registration.user.fishes_from_boat === false
                && this.reg.registration.user.fishes_from_shore === false) {
            valid = false;
        }

        if (this.reg.registration.user.fishes_from_boat === true &&
            (this.reg.registration.user.boat_used_others === false
                && this.reg.registration.user.boat_used_own === false)
        ) {
            valid = false;
        }

        return valid;
    }

    continue(): void {
        // this.navCtrl.push(RegisterBoatPage, {}, {animate: true, direction: 'forward'});
    }

}
