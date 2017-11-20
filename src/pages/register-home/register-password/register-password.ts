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

    passwordsMatch() {
        return this.reg.registration.user.password === this.reg.registration.user.password_confirm
    }

    passwordValid(): boolean {
        let valid = true;

        const protectIfUndefined = (input) =>{
            if (input === undefined || input === null){
                return "";
            } else{
                return input.toLowerCase();
            }
        };

        const regExp = new RegExp("(" + protectIfUndefined(this.reg.registration.user.lastname)
            + "|" + protectIfUndefined(this.reg.registration.user.firstname)
            + "|" + "password)", "gi");

        if (regExp.test(this.reg.registration.user.password)) {
            valid = false;
        }

        if (!this.passwordsMatch()) {
            valid = false;
        }

        return valid;
    };

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPasswordPage');
    }

    continue(): void {
        this.navCtrl.push(RegisterFisherInfoPage, {}, {animate: true, direction: 'forward'});
    }

}
