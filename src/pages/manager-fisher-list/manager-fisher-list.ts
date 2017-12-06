import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import * as moment from 'moment';

/**
 * Generated class for the ManagerFisherListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-manager-fisher-list',
  templateUrl: 'manager-fisher-list.html',
})
export class ManagerFisherListPage {

  managed_fishers: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public data: DataProvider) {

    this.data.getManagedFishers()
      .then(data => this.managed_fishers = data)
      .catch(ex => console.log(ex));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerFisherListPage');
  }

  viewManagedFishers(): string {
    return JSON.stringify(this.managed_fishers, null, 4);
  }

  displayMomentDate(date: string): string {
    return moment(date).startOf('day').fromNow();
  }

}
