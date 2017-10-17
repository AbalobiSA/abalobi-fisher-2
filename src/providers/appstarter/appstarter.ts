import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Platform} from "ionic-angular";
import {ErrorsProvider} from "../errors/errors";

let startApp: any;


/*
    Service for launching apps externally

    Generated class for the AppstarterProvider provider.

    See https://angular.io/docs/ts/latest/guide/dependency-injection.html
    for more info on providers and Angular DI.
*/
@Injectable()
export class AppstarterProvider {

    constructor(public http: Http, public platform: Platform,
                public errors: ErrorsProvider) {
        // console.log('Hello AppstarterProvider Provider');
    }

    start(packagename: string, errormessage?: string, url?: string): void {
        this.platform.ready().then(() => {
            console.log("appstarter: Platform is ready!");
            try {
                let sApp = (window as any).startApp.set({
                    /* params */
                    "package": packagename,
                    "intentstart": "startActivity"
                }, {/* extras */});

                sApp.check((values) => { /* success */
                    console.log(values);
                }, (error) => { /* fail */
                    if (!url) {
                        return;
                    }

                    let x = window.confirm(errormessage);
                    if (x === true) {
                        window.open(url, '_system')
                    }
                });

                sApp.start((success) => {
                    console.log(success);
                }, (error) => {
                    console.log(error);
                    this.errors.presentToast(error);
                })
            } catch (ex) {
                console.log("appstarter: unable to home " + packagename);
                console.log(ex);
                this.errors.presentToast(ex);
            }
        });
    }

}
