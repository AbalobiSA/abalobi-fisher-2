class TripDetails {
    trip_today: boolean;
    trip_datestring: string;
    trip_date: Date;

    constructor() {

    }
}



export class Logbook {
    tripdetails: TripDetails = new TripDetails();
    constructor() {

    }
}
