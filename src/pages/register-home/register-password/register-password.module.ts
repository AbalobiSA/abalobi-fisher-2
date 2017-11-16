import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPasswordPage } from './register-password';

@NgModule({
  declarations: [
    RegisterPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPasswordPage),
  ],
})
export class RegisterPasswordPageModule {}
