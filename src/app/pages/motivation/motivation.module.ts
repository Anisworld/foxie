import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotivationPageRoutingModule } from './motivation-routing.module';

import { MotivationPage } from './motivation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotivationPageRoutingModule
  ],
  declarations: [MotivationPage]
})
export class MotivationPageModule {}
