import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterHomePage } from './register-home';

@NgModule({
  declarations: [
    RegisterHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterHomePage),
  ],
})
export class RegisterHomePageModule {}
