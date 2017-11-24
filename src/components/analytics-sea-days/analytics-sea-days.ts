import {Component, Input, EventEmitter, Output} from '@angular/core';
import moment from 'moment';
import _ from 'lodash';
/**
 * Generated class for the AnalyticsSeaDaysComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'analytics-sea-days',
    templateUrl: 'analytics-sea-days.html'
})
export class AnalyticsSeaDaysComponent {
    @Input() trips: any;

    days_fishing: number;
    days_not_fishing: number;
    trips_with_catches: number;

    constructor() {
        console.log('Hello AnalyticsSeaDaysComponent Component');
    }
}
