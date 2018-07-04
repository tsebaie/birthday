import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BcardPage } from './bcard';

@NgModule({
  declarations: [
    BcardPage,
  ],
  imports: [
    IonicPageModule.forChild(BcardPage),
  ],
})
export class BcardPageModule {}
