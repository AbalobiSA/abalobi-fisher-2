import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAgreementPage } from './register-agreement';

@NgModule({
  declarations: [
    RegisterAgreementPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterAgreementPage),
  ],
})
export class RegisterAgreementPageModule {}
