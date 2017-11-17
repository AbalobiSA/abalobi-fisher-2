import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {RegisterSummaryPage} from "../register-summary/register-summary";

/**
 * Generated class for the RegisterProfileImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-register-profile-image',
    templateUrl: 'register-profile-image.html',
})
export class RegisterProfileImagePage {

    profileImage: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider,
                public camera: Camera) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterProfileImagePage');
    }

    takePhoto(): void {
        const options: CameraOptions = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };

        this.camera.getPicture(options)
            .then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                this.profileImage = 'data:image/jpeg;base64,' + imageData;
            })
            .catch(ex => {
                // Handle error
                console.log(ex);
            });
    }

    choosePhoto(): void {
        const options: CameraOptions = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };

        this.camera.getPicture(options)
            .then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                this.profileImage = 'data:image/jpeg;base64,' + imageData;
            })
            .catch(ex => {
                // Handle error
                console.log(ex);
            });
    }

    continue(): void {
        this.reg.registration.profileImage = this.profileImage;
        this.navCtrl.push(RegisterSummaryPage, {}, {animate: true, direction: 'forward'});
    }

}
