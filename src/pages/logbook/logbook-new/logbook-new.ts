import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LogbookProvider} from "../../../providers/logbook/logbook";
import {Logbook} from "../../../classes/fisher/logbook.class";

/**
 * Generated class for the LogbookNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-logbook-new',
    templateUrl: 'logbook-new.html',
})
export class LogbookNewPage {

    logbook: Logbook;
    datetime: string = 'test';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public log: LogbookProvider) {
        this.logbook = log.logbook;
    }

    ionViewDidLoad() {
        // console.log('ionViewDidLoad LogbookNewPage');
    }

}
