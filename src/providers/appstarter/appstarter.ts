import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Platform} from "ionic-angular";
let startApp: any;


/*
  Generated class for the AppstarterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppstarterProvider {

    constructor(public http: Http, public platform: Platform) {
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
                })
            } catch (ex) {
                console.log("appstarter: unable to start " + packagename);
                console.log(ex);
            }
        });
    }

}
