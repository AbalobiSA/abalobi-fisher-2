import {Component, Input} from '@angular/core';

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

    YEAR: any;
    WEEKS: any;

    @Input() trips: any[];

    constructor() {
        this.YEAR = 2017;
        this.buildCalendarConfig({
            month: 3,
            days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        })
    }

    buildCalendarConfig(selectedMonth) {
        const weeks = [];
        const month = new Date(this.YEAR, selectedMonth.month - 1, 1);
        const day = month.getDay();
        const totalWeeks = Math.ceil(selectedMonth.days.length / 7);

        for (let i = 0; i < totalWeeks * 7; i += 7) {
            let week = [];
            if (i === 0) {
                for (let k = 0; k < day; k++) {
                    week.push({day: 0, out: false, catch: false, species: []});
                }
            }
            week = week.concat(selectedMonth.days.slice(Math.max(i - day, 0), i + 7 - day));
            while (week.length < 7) {
                week.push({day: 0, out: false, catch: false, species: []});
            }
            weeks.push(week);
        }
        this.WEEKS = weeks;
    }

}


