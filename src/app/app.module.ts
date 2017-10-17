import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpModule, Http} from '@angular/http';
// import { HttpClient, HttpClientModule } from "@angular/http";
// import {HttpClientModule} from '@angular/common/http';

import {AnalyticsHomePage} from '../pages/analytics-home/analytics-home';
import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home"
import {LandingPage} from "../pages/landing/landing";
import {SettingsPage} from "../pages/settings/settings";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppstarterProvider} from '../providers/appstarter/appstarter';
import { ErrorsProvider } from '../providers/errors/errors';
import { AuthProvider } from '../providers/auth/auth';

let pages = [
    AnalyticsHomePage,
    ContactPage,
    TabsPage,
    HomePage,
    LandingPage,
    SettingsPage
];

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        MyApp,
        pages
    ],
    imports: [
        HttpModule,
        BrowserModule,
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        pages
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AppstarterProvider,
    ErrorsProvider,
    AuthProvider
    ]
})
export class AppModule {
}
