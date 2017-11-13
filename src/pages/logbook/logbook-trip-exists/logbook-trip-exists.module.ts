import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogbookTripExistsPage } from './logbook-trip-exists';

@NgModule({
  declarations: [
    LogbookTripExistsPage,
  ],
  imports: [
    IonicPageModule.forChild(LogbookTripExistsPage),
  ],
})
export class LogbookTripExistsPageModule {}
