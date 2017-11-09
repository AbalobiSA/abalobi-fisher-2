import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";
import {DatePicker} from '@ionic-native/date-picker';
import {RegisterContactDetailsPage} from "../register-contact-details/register-contact-details";

/**
 * Generated class for the RegisterPersonalDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-register-personal-details',
    templateUrl: 'register-personal-details.html',
})
export class RegisterPersonalDetailsPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider,
                public datePicker: DatePicker) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPersonalDetailsPage');
    }

    selectDate(): void {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(
            date => {
                console.log('Got date: ', date);
            },
            err => {
                console.log('Error occurred while getting date: ', err)
            }
        );
    }

    continue(): void {
        this.navCtrl.push(RegisterContactDetailsPage, {}, {animate: true, direction: 'forward'});
    }

}
