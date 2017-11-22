import { Component } from '@angular/core';

/**
 * Generated class for the AnalyticsCalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'analytics-calendar',
  templateUrl: 'analytics-calendar.html'
})
export class AnalyticsCalendarComponent {

  text: string;

  constructor() {
    console.log('Hello AnalyticsCalendarComponent Component');
    this.text = 'Hello World';
  }

}
