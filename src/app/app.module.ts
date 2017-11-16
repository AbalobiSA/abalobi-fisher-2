import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpModule, Http} from '@angular/http';
import {DatePicker} from '@ionic-native/date-picker';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

import {AnalyticsHomePage} from '../pages/analytics-home/analytics-home';
import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home"
import {LandingPage} from "../pages/landing/landing";
import {SettingsPage} from "../pages/settings/settings";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppstarterProvider} from '../providers/appstarter/appstarter';
import {ErrorsProvider} from '../providers/errors/errors';
import {RegisterHomePage} from "../pages/register-home/register-home";
import {RegistrationProvider} from '../providers/registration/registration.provider';
import {RegisterAgreementPage} from "../pages/register-home/register-agreement/register-agreement";
import {RegisterPersonalDetailsPage} from "../pages/register-home/register-personal-details/register-personal-details";
import {RegisterContactDetailsPage} from "../pages/register-home/register-contact-details/register-contact-details";
import {AuthProvider} from '../providers/auth/auth';
import {UserProvider} from '../providers/user/user';

import {LoaderProvider} from "../providers/loader.service";

import {TranslatePipe} from "@ngx-translate/core";
import {SettingsEditPage} from "../pages/settings/settings-edit/settings-edit";
import {LogbookNewPage} from "../pages/logbook/logbook-new/logbook-new";
import {LogbookProvider} from '../providers/logbook/logbook';
import {LogbookTripExistsPage} from "../pages/logbook/logbook-trip-exists/logbook-trip-exists";
import {LogbookTripLocationPage} from "../pages/logbook/logbook-trip-location/logbook-trip-location";
import {LogbookTripTypePage} from "../pages/logbook/logbook-trip-type/logbook-trip-type";
import {RegisterPasswordPage} from "../pages/register-home/register-password/register-password";
import {RegisterFisherInfoPage} from "../pages/register-home/register-fisher-info/register-fisher-info";
import {RegisterBoatPage} from "../pages/register-home/register-boat/register-boat";


export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const pages = [
    LogbookTripExistsPage,
    LogbookTripLocationPage,
    LogbookTripTypePage,
    RegisterPasswordPage,
    RegisterFisherInfoPage,
    RegisterBoatPage
];

@NgModule({
    declarations: [
        MyApp,
        AnalyticsHomePage,
        ContactPage,
        TabsPage,
        HomePage,
        LandingPage,
        SettingsPage,
        RegisterHomePage,
        RegisterAgreementPage,
        RegisterPersonalDetailsPage,
        RegisterContactDetailsPage,
        SettingsEditPage,
        LogbookNewPage,
        pages
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
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
        AnalyticsHomePage,
        ContactPage,
        TabsPage,
        HomePage,
        LandingPage,
        SettingsPage,
        RegisterHomePage,
        RegisterAgreementPage,
        RegisterPersonalDetailsPage,
        RegisterContactDetailsPage,
        SettingsEditPage,
        LogbookNewPage,
        pages
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AppstarterProvider,
        ErrorsProvider,
        RegistrationProvider,
        DatePicker,
        AuthProvider,
        UserProvider,
        LoaderProvider,
        LogbookProvider
    ]
})
export class AppModule {
}
