import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogbookNoTripPage } from './logbook-no-trip';

@NgModule({
  declarations: [
    LogbookNoTripPage,
  ],
  imports: [
    IonicPageModule.forChild(LogbookNoTripPage),
  ],
})
export class LogbookNoTripPageModule {}
