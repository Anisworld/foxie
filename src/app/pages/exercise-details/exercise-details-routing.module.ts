import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseDetailsPage } from './exercise-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseDetailsPageRoutingModule {}
