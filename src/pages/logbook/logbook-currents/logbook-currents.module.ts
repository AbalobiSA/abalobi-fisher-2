import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LogbookCurrentsPage} from './logbook-currents';

@NgModule({
    declarations: [
        LogbookCurrentsPage,
    ],
    imports: [
        IonicPageModule.forChild(LogbookCurrentsPage),
    ],
})
export class LogbookCurrentsPageModule {
}
