import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogbookWeatherPage } from './logbook-weather';

@NgModule({
  declarations: [
    LogbookWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(LogbookWeatherPage),
  ],
})
export class LogbookWeatherPageModule {}
