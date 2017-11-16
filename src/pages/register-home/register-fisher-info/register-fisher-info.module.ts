import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFisherInfoPage } from './register-fisher-info';

@NgModule({
  declarations: [
    RegisterFisherInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFisherInfoPage),
  ],
})
export class RegisterFisherInfoPageModule {}
