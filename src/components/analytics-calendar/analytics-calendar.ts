import {Component, Input} from '@angular/core';
import moment from 'moment';
import _ from 'lodash';

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
    // Constants

    @Input() trips: any[] = null;
    @Input() month: string;

    DAY_NAMES: string[] = [
        "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
    ];

    SELECTED_MONTH: string;
    DAYS_IN_MONTH: number;
    START_DAY: number;

    daysArray: any[];

    numPreBlocks: number;
    numPostBlocks: number;

    preBlocksArray: number[];
    postBlocksArray: number[];

    constructor() {
        // console.log("SENT MONTH: ", this.month);
        this.renderCalendar();
    }

    ngOnChanges(changes) {
        this.renderCalendar();
    }


    renderCalendar(): void {
        this.DAYS_IN_MONTH = daysInMonth(this.month);
        const firstDay = this.month + "-01";
        console.log("First day of month: ", firstDay);
        this.START_DAY = moment(firstDay).day();

        let calendar = [];
        this.numPreBlocks = this.START_DAY;
        this.numPostBlocks = (this.numPreBlocks > 4 ? 42 : 35) - this.DAYS_IN_MONTH - this.numPreBlocks;

        console.log(this.numPostBlocks);

        // if (this.numPreBlocks === 0) { this.numPostBlocks -= 1 };

        this.daysArray = buildDays(this.DAYS_IN_MONTH, this.trips);

        this.postBlocksArray = _.clone([]);
        this.preBlocksArray = _.clone([]);

        if (this.numPreBlocks !== 0) for (let i = 0; i < this.numPreBlocks; i++ ) { this.preBlocksArray.push(0) }
        if (this.numPostBlocks !== 0) for (let i = 0; i < this.numPostBlocks; i++ ) { this.postBlocksArray.push(0) }
    }

    addDay(): void {

    }

    displayImage(day): string {
        if (day['trip_has'] === "no") return "assets/images/calendar/anchor.png";
        else if (day['catch_has'] === "no") return "assets/images/calendar/fish-empty.png";
        else if (day['catch_has'] === "yes") return "assets/images/calendar/fish-green.png";
    }
}

const daysInMonth = (MONTH_BASE_ONE) => {
    let days = moment(MONTH_BASE_ONE).daysInMonth();
    console.log("debug: days in month: ", days);
    return days;
};

const buildDays = (days, trips) => {
    const daysArray = [];
    for (let i = 0; i < days; i++ ) {

        let currentTrip;

        if (!!trips) {
            for (const trip of trips) {
                const tripDay = moment(trip.trip_date__c).date();
                if (tripDay === (i+1)) {
                    currentTrip = trip;
                }
            }
        }


        let dayObject = {
            day: (i+1)
        };

        if (!currentTrip) {
            dayObject['log_has'] = "no";
            dayObject['trip_has'] = "no";
            dayObject['catch_has'] = "no";
        } else {
            dayObject['log_has'] = "yes";
            dayObject['trip_has'] = currentTrip.trip_has__c || "no";
            dayObject['catch_has'] = currentTrip.catch_has__c || "no";
        }

        daysArray.push(dayObject);
    }

    return daysArray;
};
