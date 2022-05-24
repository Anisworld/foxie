import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotivationPage } from './motivation.page';

const routes: Routes = [
  {
    path: '',
    component: MotivationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotivationPageRoutingModule {}
