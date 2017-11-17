import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrationProvider} from "../../../providers/registration/registration.provider";
import {HomePage} from "../../home/home";
import {LandingPage} from "../../landing/landing";
import {LoaderProvider} from "../../../providers/loader.service";
import {UserProvider} from "../../../providers/user/user";

/**
 * Generated class for the RegisterSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-register-summary',
    templateUrl: 'register-summary.html',
})
export class RegisterSummaryPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public reg: RegistrationProvider,
                public loader: LoaderProvider,
                public data: UserProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterSummaryPage');
    }

    getDisplayCommunity(): string {
        const homeCommunity = this.reg.registration.user.community;
        const homeCommunityCustom = this.reg.registration.user.community_custom || undefined;
        return homeCommunity === "other" ? homeCommunityCustom : homeCommunity;
    }

    continue(): void {
        this.loader.presentLoader("Submitting your registration. Please wait...");
        this.data.submitRegistration(this.reg.registration)
            .then(() => {
                this.loader.dismissLoader();
            })
            .catch(ex => {
                console.log(ex);
                this.loader.dismissLoader();
            })
        // this.navCtrl.setRoot(LandingPage, {}, {animate: true, direction: 'forward'});
    }

}
