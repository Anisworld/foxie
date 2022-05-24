import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { RouterModule, Routes } from '@angular/router';
import { HomePageRoutingModule } from './home-routing.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      //tab one
      {
        path:'issue',
        loadChildren: () => import ('../issue/issue.module').then(m => m.IssuePageModule)
      },
      {
        path:'treatment',
        loadChildren: () => import('../treatment/treatment.module').then( m => m.TreatmentPageModule)
      },
      {
        path:'home',
        loadChildren: () => import ('../home/home.module').then(m => m.HomePageModule)
      },
      {
          path: '',
          redirectTo: '/home/issue',
          pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/home/issue',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
     CommonModule,
     FormsModule,
     IonicModule,
     HomePageRoutingModule,
    //  RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
