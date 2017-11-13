import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogbookTripLocationPage } from './logbook-trip-location';

@NgModule({
  declarations: [
    LogbookTripLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(LogbookTripLocationPage),
  ],
})
export class LogbookTripLocationPageModule {}
