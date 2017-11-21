import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../providers/registration/registration.provider";
import {RegisterAgreementPage} from "./register-agreement/register-agreement";
import {Device} from "@ionic-native/device";
import {AppVersion} from "@ionic-native/app-version";

/**
 * Generated class for the RegisterHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-register-home',
    templateUrl: 'register-home.html',
})
export class RegisterHomePage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider,
                public device: Device,
                public version: AppVersion) {

        // If navigating from the home screen,
        // Clear the registration
        this.reg.clearRegistration();

        this.version.getVersionNumber()
            .then(versionNumber => {
                this.reg.registration.device.appVersion = versionNumber;
                this.reg.registration.device.cordova = this.device.cordova;
                this.reg.registration.device.manufacturer = this.device.manufacturer;
                this.reg.registration.device.model = this.device.model;
                this.reg.registration.device.version = this.device.version;
                this.reg.registration.device.serial = this.device.serial;
                this.reg.registration.device.uuid = this.device.uuid;
                console.log("DONE!")
            })
            .catch(ex => console.log(ex));

        // this.reg.registration.device.appVersion = this.version.getVersionCode();

        console.log("logging device: ", this.device);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterHomePage');
    }

    continue(): void {
        this.navCtrl.push(RegisterAgreementPage, {}, {animate: true, direction: 'forward'});
    }

}
