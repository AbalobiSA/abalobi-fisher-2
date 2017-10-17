import {Injectable} from '@angular/core';
import {App, NavController} from "ionic-angular";

import {LandingPage} from "../../pages/landing/landing";
import {TabsPage} from "../../pages/tabs/tabs";

import {environment} from '../../environment/environment';

declare var Auth0Lock: any;

@Injectable()
export class AuthProvider {

    lock;

    constructor(protected app: App) {
        this.lock = new Auth0Lock(
            environment.CLIENT_ID,
            environment.DOMAIN,
            {
                theme: {
                    logo: "assets/images/abalobi_logo.png",
                    primaryColor: '#31324F',
                    languageDictionary: {
                        title: "Login to Abalobi"
                    }
                }
            });

        this.handleAuthentication();
    }

    private getNavCtrl(): NavController {
        return this.app.getRootNav();
    }

    public login(): void {
        this.lock.show();
    }

    /**
     * Call this method in app.component if using path-based routing
     */
    public handleAuthentication(): void {
        this.lock.on('authenticated', (authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.lock.hide();

                this.getNavCtrl().setRoot(TabsPage, {}, {animate: true, direction: 'forward'});
            }
        });

        this.lock.on('authorization_error', (err) => {
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);

            this.getNavCtrl().setRoot(LandingPage, {}, {animate: true, direction: 'forward'});
        });
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public clearSession(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public logout(): void {
        this.clearSession();

        // Go back to the home route
        // this.getNavCtrl().setRoot(LandingPage, {}, {animate: true, direction: 'forward'});
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));

        return new Date().getTime() < expiresAt;
    }
}
