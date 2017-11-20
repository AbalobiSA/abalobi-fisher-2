import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";
import {RegisterPersonalDetailsPage} from "../register-personal-details/register-personal-details";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators, FormArray} from "@angular/forms";

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

    ionViewDidEnter() {

    }

    formValid(): boolean {
        let valid = true;

        // First agreement must be clicked
        if (!this.reg.registration.permissions_abalobi) {
            valid = false;
        }

        return valid;
    }

    continue(): void {
        this.navCtrl.push(RegisterPersonalDetailsPage, {}, {animate: true, direction: 'forward'});
    }

}

// export const forbiddenNameValidator = (nameRe: RegExp): ValidatorFn => {
//     return (control: AbstractControl): {[key: string]: any} => {
//         const forbidden = nameRe.test(control.value);
//         return forbidden ? {'forbiddenName': {value: control.value}} : null;
//     };
// };

// export function mustBeTrueValidator(value?: boolean): ValidatorFn {
//     return (control: AbstractControl): {[key: string]: any} => {
//         const forbidden = (control.value === false);
//         return forbidden ? {'forbiddenName': {value: control.value}} : null;
//     };
// };
