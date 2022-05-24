import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseDetailsPageRoutingModule } from './exercise-details-routing.module';

import { ExerciseDetailsPage } from './exercise-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseDetailsPageRoutingModule
  ],
  declarations: [ExerciseDetailsPage]
})
export class ExerciseDetailsPageModule {}
