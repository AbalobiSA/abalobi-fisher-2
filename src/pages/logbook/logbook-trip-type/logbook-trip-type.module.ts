import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogbookTripTypePage } from './logbook-trip-type';

@NgModule({
  declarations: [
    LogbookTripTypePage,
  ],
  imports: [
    IonicPageModule.forChild(LogbookTripTypePage),
  ],
})
export class LogbookTripTypePageModule {}
