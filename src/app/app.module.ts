import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpModule, Http} from '@angular/http';
import {DatePicker} from '@ionic-native/date-picker';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
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
import {DataProvider} from '../providers/data/data';

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
import {LogbookCurrentsPage} from "../pages/logbook/logbook-currents/logbook-currents";
import {LogbookNoTripPage} from "../pages/logbook/logbook-no-trip/logbook-no-trip";
import {LogbookTripLocationShorespotsPage} from "../pages/logbook/logbook-trip-location-shorespots/logbook-trip-location-shorespots";
import {LogbookTripLocationHarbourPage} from "../pages/logbook/logbook-trip-location-harbour/logbook-trip-location-harbour";
import {LogbookWeatherPage} from "../pages/logbook/logbook-weather/logbook-weather";
import {RegisterProfileImagePage} from "../pages/register-home/register-profile-image/register-profile-image";

import {FinancesPage} from "../pages/analytics-home/finances/finances";

import {Camera, CameraOptions} from '@ionic-native/camera';
import {RegisterSummaryPage} from "../pages/register-home/register-summary/register-summary";
import {IonicStorageModule} from "@ionic/storage";
import {CircleLoaderComponent} from "../components/circle-loader/circle-loader";
import {AnalyticsTripViewPage} from "../pages/analytics-home/analytics-trip-view/analytics-trip-view";
import {OdkProvider} from '../providers/odk/odk';
import {File} from "@ionic-native/file";
import {Device} from "@ionic-native/device";
import {AppVersion} from "@ionic-native/app-version";
import {AnalyticsTripsListComponent} from "../components/analytics-trips-list/analytics-trips-list";
import {AnalyticsCalendarComponent} from "../components/analytics-calendar/analytics-calendar";


export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const pages = [
    LogbookCurrentsPage,
    LogbookTripExistsPage,
    LogbookTripLocationPage,
    LogbookTripTypePage,
    LogbookNoTripPage,
    LogbookTripLocationShorespotsPage,
    LogbookTripLocationHarbourPage,
    RegisterPasswordPage,
    RegisterFisherInfoPage,
    LogbookWeatherPage,
    RegisterBoatPage,
    RegisterProfileImagePage,
    RegisterSummaryPage,
    AnalyticsTripViewPage,
    FinancesPage
];

const components = [
    AnalyticsTripsListComponent,
    AnalyticsCalendarComponent
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
        CircleLoaderComponent,
        pages,
        components
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
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
        DataProvider,
        LoaderProvider,
        LogbookProvider,
        Camera,
        OdkProvider,
        File,
        Device,
        AppVersion
    ]
})
export class AppModule {
}
