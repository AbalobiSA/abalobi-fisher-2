import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../../providers/data/data";
import {User} from "../../../classes/fisher/user.class";
import _ from 'lodash';
import {LoaderProvider} from "../../../providers/loader.service";

/**
 * Generated class for the SettingsEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-settings-edit',
    templateUrl: 'settings-edit.html',
})
export class SettingsEditPage {

    user: User;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public fisher: DataProvider,
        public loader: LoaderProvider
    ) {
        this.user = _.cloneDeep(this.fisher.currentUser);
    }

    ionViewDidLoad() {

    }

    saveChanges(): void {
        this.loader.presentLoader("Saving changes...");
        const token = window.localStorage.getItem('access_token');
        this.fisher.updateUser(this.user, token)
            .then(success => {
                this.loader.dismissLoader();
                this.navCtrl.pop();
            })
            .catch(ex => {
                this.loader.dismissLoader();
                console.log(ex);
                alert("Unable to update settings!")
            })
    }

}
