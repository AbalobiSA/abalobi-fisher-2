import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

import {User} from "../../classes/fisher/user.class";
import {Community} from "../../classes/fisher/community.class";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

    // BASE_URL: string = "http://server.abalobi.info";
    BASE_URL: string = "http://localhost:8080";
    currentUser: User;

    constructor(public http: Http) {
        // console.log('Hello UserProvider Provider');
    }

    getUserInfo(token: string): Promise<User> {
        return new Promise((resolve, reject) => {

            if (!token) {
                return reject()
            }

            const access_token = token.split("\"").join("");
            const query = this.BASE_URL + '/fisher/user';
            const headers = new Headers();
            const options = new RequestOptions({
                headers: headers,
                params: {
                    access_token
                }
            });

            this.http.get(query, options)
                .map(response => response.json())
                .toPromise()
                    .then(result => {
                        this.currentUser = result as User;
                        resolve(this.currentUser);
                    })
                    .catch(ex => {
                        reject(ex);
                    })
        })
    }

}
