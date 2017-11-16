import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBoatPage } from './register-boat';

@NgModule({
  declarations: [
    RegisterBoatPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBoatPage),
  ],
})
export class RegisterBoatPageModule {}
