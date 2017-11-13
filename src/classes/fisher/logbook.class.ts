class TripDetails {
    trip_today: boolean;
    trip_datestring: string;
    trip_date: Date;

    trip_exists: boolean;
    no_trip_reason: string;
    no_trip_reason_other: string;

    constructor() {

    }
}



export class Logbook {
    tripdetails: TripDetails = new TripDetails();
    constructor() {

    }
}
