import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TranslateService} from '@ngx-translate/core';
import {LandingPage} from "../pages/landing/landing";
import Auth0Cordova from '@auth0/cordova';

import {TabsPage} from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home"

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = LandingPage;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                translate: TranslateService) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            translate.setDefaultLang('en');
            statusBar.styleDefault();
            splashScreen.hide();

            (<any>window).handleOpenURL = (url) => {
                Auth0Cordova.onRedirectUri(url);
            };
        });
    }
}
