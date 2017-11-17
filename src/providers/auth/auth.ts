import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable, NgZone} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import Auth0Cordova from '@auth0/cordova';
import Auth0 from 'auth0-js';

const auth0Config = {
    // needed for auth0
    clientID: 'UzuSWzByJ71RvE72tftmlZVfDmPWfCXc',

    // needed for auth0cordova
    clientId: 'UzuSWzByJ71RvE72tftmlZVfDmPWfCXc',
    domain: 'abalobi.eu.auth0.com',
    callbackURL: location.href,
    packageIdentifier: 'com.abalobi.fisher'
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

    auth0 = new Auth0.WebAuth(auth0Config);
    accessToken: string;
    idToken: string;
    user: any;

    constructor(public http: Http,
                public zone: NgZone) {
        // console.log('Hello AuthProvider Provider');

        this.user = this.getStorageVariable('profile');
        this.idToken = this.getStorageVariable('id_token');
    }

    private getStorageVariable(name) {
        let storageVariable = null;
        try {
            const tempVar = window.localStorage.getItem(name);
            console.log("tempvar: ", tempVar);
            storageVariable = JSON.parse(tempVar);
        } catch (ex) {
            console.log("warning: encountered null storage variable");
            // console.log(ex);
        }
        return storageVariable;
    }

    private setStorageVariable(name, data) {
        window.localStorage.setItem(name, JSON.stringify(data));
    }

    private setIdToken(token) {
        this.idToken = token;
        this.setStorageVariable('id_token', token);
    }

    private setAccessToken(token) {
        this.accessToken = token;
        this.setStorageVariable('access_token', token);
    }

    public isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    }

    public login() {

        let client;

        try {
            client = new Auth0Cordova(auth0Config);
        } catch (ex) {
            console.log("error setting auth0 client: ", ex);
        }


        const options = {
            scope: 'openid profile offline_access'
        };

        client.authorize(options, (err, authResult) => {
            if(err) {
                throw err;
            }

            console.log("authprovider: user has been successfully authorized!");

            this.setIdToken(authResult.idToken);
            this.setAccessToken(authResult.accessToken);

            const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            this.setStorageVariable('expires_at', expiresAt);

            this.auth0.client.userInfo(this.accessToken, (err, profile) => {
                if(err) {
                    throw err;
                }

                profile.user_metadata = profile.user_metadata || {};
                this.setStorageVariable('profile', profile);
                this.zone.run(() => {
                    this.user = profile;
                    console.log("Updating zone ");
                });
            });
        });
    }

    public loginPromise() {
        return new Promise((resolve, reject) => {

            let client = new Auth0Cordova(auth0Config);

            const options = {
                scope: 'openid profile offline_access'
            };

            client.authorize(options, (err, authResult) => {
                if(err) {
                    throw err;
                }

                console.log("authprovider: user has been successfully authorized!");

                this.setIdToken(authResult.idToken);
                this.setAccessToken(authResult.accessToken);

                const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
                this.setStorageVariable('expires_at', expiresAt);

                this.auth0.client.userInfo(this.accessToken, (err, profile) => {
                    if(err) {
                        reject();
                        throw err;
                    }

                    profile.user_metadata = profile.user_metadata || {};
                    this.setStorageVariable('profile', profile);

                    this.zone.run(() => {
                        this.user = profile;
                        console.log("Updating zone ");
                        resolve();
                    });
                });
            });
        });
    }

    public loginManual(email, password) {
        return new Promise((resolve, reject) => {
            this.auth0.login({
                connection: 'AbalobiUsers',
                email: email,
                password: password,
                scope: 'openid profile offline_access',
                device: 'mobile',
                // clientID: 'UzuSWzByJ71RvE72tftmlZVfDmPWfCXc',
                // clientId: 'UzuSWzByJ71RvE72tftmlZVfDmPWfCXc',
                // domain: 'abalobi.eu.auth0.com',
                // callbackURL: location.href,
                redirectUri: location.href,
                // packageIdentifier: 'com.abalobi.fisher',
                responseType: 'token'// test
            }, (err, authResult) => {
                if (err){
                    console.error(err);
                    reject(err);
                    return;
                }else{
                    console.log("authprovider: user has been successfully authorized!");

                    this.setIdToken(authResult.idToken);
                    this.setAccessToken(authResult.accessToken);

                    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
                    this.setStorageVariable('expires_at', expiresAt);

                    // Fetch profile information
                    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
                        if(err) {
                            reject();
                            throw err;
                        }

                        profile.user_metadata = profile.user_metadata || {};
                        this.setStorageVariable('profile', profile);

                        this.zone.run(() => {
                            this.user = profile;
                            console.log("Updating zone ");
                            resolve();
                        });
                    });
                }
            });
        });
    }

    public injectToken(authResult) {
        return new Promise((resolve, reject) => {
            console.log("authprovider: user has been successfully authorized!");

            this.setIdToken(authResult.id_token);
            this.setAccessToken(authResult.access_token);

            const expiresAt = JSON.stringify((authResult.expires_in * 1000) + new Date().getTime());
            this.setStorageVariable('expires_at', expiresAt);

            // Fetch profile information
            this.auth0.client.userInfo(this.accessToken, (err, profile) => {
                if(err) {
                    reject();
                    throw err;
                }

                profile.user_metadata = profile.user_metadata || {};
                this.setStorageVariable('profile', profile);

                this.zone.run(() => {
                    this.user = profile;
                    console.log("Updating zone ");
                    resolve();
                });
            });
        })
    }

    public logout() {
        window.localStorage.removeItem('profile');
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('expires_at');

        this.idToken = null;
        this.accessToken = null;
        this.user = null;
    }

}
