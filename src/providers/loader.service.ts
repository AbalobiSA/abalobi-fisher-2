import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoaderProvider {

    loader: any;

    constructor(public http: Http,
                public loadingCtrl: LoadingController) {
        // console.log('Hello LoaderProvider Provider');
    }

    presentLoader(text?: string): void {
        this.dismissLoader();
        try {
            this.loader = this.loadingCtrl.create({
                content: text || "Please wait..."
            });
            this.loader.present();
        } catch (ex) {

        }
    }

    dismissLoader(): void {
        try {
            this.loader.dismiss()
        } catch (ex) {

        }
    }

}
