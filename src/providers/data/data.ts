import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

import {User} from "../../classes/fisher/user.class";
import {Community} from "../../classes/fisher/community.class";
import {Registration} from "../../classes/registration/registration.class";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

    BASE_URL: string = "http://server.abalobi.info";
    // BASE_URL: string = "http://10.0.0.101:8080";
    // BASE_URL: string = "http://localhost:8080";
    currentUser: User;

    constructor(public http: Http) {
        // console.log('Hello DataProvider Provider');
    }

    getUserInfo(token: string): Promise<User> {
        return new Promise((resolve, reject) => {

            if (!token) {
                return reject()
            }

            const access_token = token.split("\"").join("");
            const query = this.BASE_URL + '/fisher/data';
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

    updateUser(user: User, token: string): Promise<User> {
        return new Promise((resolve, reject) => {

            if (!user) {
                return reject()
            }

            const access_token = token.split("\"").join("");
            const query = this.BASE_URL + '/fisher/data/update';
            const headers = new Headers();
            const options = new RequestOptions({
                headers: headers,
                params: {
                    access_token
                }
            });

            const updateFields = [
                "Id",
                "Email__c",
                "contact_mobile_num__c",
                "share_data_with_daff__c",
                "share_data_with_local_impl__c"
            ];

            let body = {};

            for (const field of updateFields) {
                body[field] = user[field];
            }

            this.http.post(query, body, options)
                // .map(response => response.json())
                .toPromise()
                .then(result => {
                    for (const key of updateFields) {
                        this.currentUser[key] = user[key];
                    }
                    resolve();
                })
                .catch(ex => {
                    reject(ex);
                })
        })
    }

    submitRegistration(reg: Registration): Promise<any> {
            const query = this.BASE_URL + '/register';
            const headers = new Headers();
            const options = new RequestOptions({
                headers: headers
            });
            return this.http.post(query, reg, options)
                // .map(response => response.json())
                .toPromise()
    }

    downloadImage(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const query = url;
            const headers = new Headers();
            // headers.append("Access-Control-Allow-Origin", "true");
            const options = new RequestOptions({
                headers: headers
            });

            this.http.get(query, options)
                // .map(response => response.json())
                .toPromise()
                .then(result => {
                    resolve(result);
                })
                .catch(ex => {
                    reject(ex);
                })
        })
    }

}