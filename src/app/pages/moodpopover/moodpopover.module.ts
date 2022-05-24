import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodpopoverPageRoutingModule } from './moodpopover-routing.module';

import { MoodpopoverPage } from './moodpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodpopoverPageRoutingModule
  ],
  declarations: [MoodpopoverPage]
})
export class MoodpopoverPageModule {}
