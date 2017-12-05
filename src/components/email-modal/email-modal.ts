import {Component} from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";
import {LoaderProvider} from "../../providers/loader.service";
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the EmailModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'email-modal',
  templateUrl: 'email-modal.html'
})
export class EmailModalComponent {

  email: string;

  constructor(public viewCtrl: ViewController,
              public loader: LoaderProvider,
              public params: NavParams,
              public data: DataProvider) {
    this.email = this.params.get("email");
  }

  sendEmail(): void {
    this.loader.presentLoader("Sending email, please wait...");
    this.data.emailReport(this.email, this.data.currentUser.abalobi_id__c)
      .then(success => {
        this.loader.dismissLoader();
        alert("Email sent!");
        this.dismiss();
      })
      .catch(ex => {
        this.loader.dismissLoader();
        alert("Email sending failed.");
        console.log(ex);
        this.dismiss();
      });
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

}
