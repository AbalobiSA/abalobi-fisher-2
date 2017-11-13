import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import _ from "lodash";
import {Logbook} from "../../classes/fisher/logbook.class";

/*
  Generated class for the LogbookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogbookProvider {

    logbook: Logbook;

    constructor(public http: Http) {
        this.logbook = new Logbook();
    }

    clearLogbook(): void {
        this.logbook = new Logbook();
    }

    print(): string {
        return JSON.stringify(this.logbook, null, 4);
    }

}
