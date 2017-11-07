import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ToastController} from 'ionic-angular';
/*
  Generated class for the ErrorsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ErrorsProvider {

    public showErrors: boolean;

    constructor(public http: Http,
                public toastCtrl: ToastController) {
        this.showErrors = false;
    }

    presentToast(text: string): void {
        if (this.showErrors) {
            let toast = this.toastCtrl.create({
                message: text,
                duration: 3000,
                position: "top",
                showCloseButton: true,
                dismissOnPageChange: true
            });
            toast.present();
        }
    }

}
