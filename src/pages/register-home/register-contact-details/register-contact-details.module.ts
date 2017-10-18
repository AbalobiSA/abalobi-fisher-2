import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterContactDetailsPage } from './register-contact-details';

@NgModule({
  declarations: [
    RegisterContactDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterContactDetailsPage),
  ],
})
export class RegisterContactDetailsPageModule {}
