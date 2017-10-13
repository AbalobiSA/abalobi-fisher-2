import {Component} from '@angular/core';

import {AnalyticsHomePage} from '../analytics-home/analytics-home';
import {ContactPage} from '../contact/contact';
import {HomePage} from "../home/home";
import {SettingsPage} from "../settings/settings";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = AnalyticsHomePage;
    tab3Root = SettingsPage;

    constructor() {

    }
}
