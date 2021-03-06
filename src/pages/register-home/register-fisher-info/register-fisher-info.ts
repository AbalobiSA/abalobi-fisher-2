import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";
import {CommunityData} from "../../../classes/data/communities.data.class";
import {Community} from "../../../classes/fisher/community.class";
import {RegisterBoatPage} from "../register-boat/register-boat";

/**
 * Generated class for the RegisterFisherInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-register-fisher-info',
    templateUrl: 'register-fisher-info.html',
})
export class RegisterFisherInfoPage {

    comms: CommunityData = new CommunityData();

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterFisherInfoPage');
    }

    resetCommunity() {
        this.reg.registration.user.community = undefined;
    }

    continue(): void {
        this.navCtrl.push(RegisterBoatPage, {}, {animate: true, direction: 'forward'});
    }

}
