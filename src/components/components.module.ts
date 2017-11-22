import { NgModule } from '@angular/core';
import { AnalyticsCalendarComponent } from './analytics-calendar/analytics-calendar';
import { AnalyticsTripsListComponent } from './analytics-trips-list/analytics-trips-list';
@NgModule({
	declarations: [AnalyticsCalendarComponent,
    AnalyticsTripsListComponent],
	imports: [],
	exports: [AnalyticsCalendarComponent,
    AnalyticsTripsListComponent]
})
export class ComponentsModule {}
