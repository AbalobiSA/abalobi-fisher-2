import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPersonalDetailsPage } from './register-personal-details';

@NgModule({
  declarations: [
    RegisterPersonalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPersonalDetailsPage),
  ],
})
export class RegisterPersonalDetailsPageModule {}
