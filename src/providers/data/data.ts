import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import _ from 'lodash';


import {User} from "../../classes/fisher/user.class";
import {Community} from "../../classes/fisher/community.class";

import {AnalyticsTrip} from "../../classes/analytics/AnalyticsTrip";

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

  // Analytics Data
  cachedTrips = {};

  constructor(public http: Http) {
    // console.log('Hello DataProvider Provider');
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

  updateUser(user: User, token: string): Promise<User> {
    return new Promise((resolve, reject) => {

      if (!user) {
        return reject()
      }

      const access_token = token.split("\"").join("");
      const query = this.BASE_URL + '/fisher/user/update';
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

  

  getTripLog(year = null, month = null): Promise<any> {
    if (year === null || month === null) {
      year = new Date().getFullYear();
      month = new Date().getMonth();
    }

    const access_token = window.localStorage.getItem('access_token').split('"').join("");
    const query = this.BASE_URL + '/analytics/trips';
    const headers = new Headers();
    const options = new RequestOptions({
      headers: headers,
      params: {access_token, year, month}
    });

    // AnalyticsTrip[];
    console.log("dataservice: querying 1 month of trips...");

    const key = [parseInt(month), year].join("-");
    console.log(key);

    if (!!this.cachedTrips) {
      if (Object.keys(this.cachedTrips).indexOf(key) !== -1) {
        console.log(key, 'is cached locally. Not querying server');
        return Promise.resolve(this.cachedTrips[key]);
      }

      return this.http.get(query, options)
        .map(response => response.json())
        .toPromise()
        .then(trips => {
          console.log("dataservice: query complete.");

          this.cachedTrips[key] = trips as AnalyticsTrip[];

          return Promise.resolve(this.cachedTrips[key]);
        })
        .catch(handleError)
    } else {
      return this.http.get(query, options)
        .map(response => response.json())
        .toPromise()
        .then(trips => {
          console.log("dataservice: query complete.");

          this.cachedTrips[key] = trips as AnalyticsTrip[];

          return Promise.resolve(this.cachedTrips[key]);
        })
        .catch(handleError)
    }
  }

  emailReport(destEmail: string, ownerId: string): Promise<any> {
    const query = this.BASE_URL + '/pdf-report';
    const headers = new Headers();
    const options = new RequestOptions({headers, params: {ownerId, destEmail}});

    return this.http.get(query, options)
      .map(response => response.json())
      .toPromise()
  }

  userIsManager(): boolean {
    return this.currentUser.abalobi_usertype__c.toLowerCase().includes("manager");
  }

  getManagedFishers(): Promise<any> {
    const query = this.BASE_URL + '/analytics/manager/tripsubmissions';
    const headers = new Headers();
    const options = new RequestOptions({headers, params: {
        id: this.currentUser.abalobi_id__c
      }});

    return this.http.get(query, options)
      .map(response => response.json())
      .map(response => _.sortBy(response, "last_trip_date").reverse())
      .toPromise()
  }
}

const handleError = (ex) => {
  console.log("dataservice: server error: ", ex['status']);
  return Promise.reject(ex);
};
