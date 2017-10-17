import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Registration} from "../../classes/registration/registration.class";

/*
  Generated class for the RegistrationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegistrationProvider {

    registration: Registration;

    constructor(public http: Http) {
        this.registration = new Registration();
    }

    clearRegistration(): void {
        this.registration = new Registration();
    }

    printRegistration(): string {
        return JSON.stringify(this.registration, null, 4)
    }

}
