import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogbookNewPage } from './logbook-new';

@NgModule({
  declarations: [
    LogbookNewPage,
  ],
  imports: [
    IonicPageModule.forChild(LogbookNewPage),
  ],
})
export class LogbookNewPageModule {}
