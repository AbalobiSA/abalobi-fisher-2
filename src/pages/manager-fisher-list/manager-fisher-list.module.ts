import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagerFisherListPage } from './manager-fisher-list';

@NgModule({
  declarations: [
    ManagerFisherListPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagerFisherListPage),
  ],
})
export class ManagerFisherListPageModule {}
