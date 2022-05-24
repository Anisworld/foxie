import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'loader',pathMatch: 'full'},
  {path: 'loader', loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule) },
  {path: 'username', loadChildren: () => import('./pages/username/username.module').then( m => m.UsernamePageModule) },
  {path: 'goals', loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule) },
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  {path: 'issue', loadChildren: () => import('./pages/issue/issue.module').then( m => m.IssuePageModule) },
  {path: 'exercise', loadChildren: () => import('./pages/exercise/exercise.module').then( m => m.ExercisePageModule) },
  {path: 'activity', loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule) },
  {path: 'motivation', loadChildren: () => import('./pages/motivation/motivation.module').then( m => m.MotivationPageModule) },
  {path: 'exercise-details', loadChildren: () => import('./pages/exercise-details/exercise-details.module').then( m => m.ExerciseDetailsPageModule) },
  {path: 'treatment', loadChildren: () => import('./pages/treatment/treatment.module').then( m => m.TreatmentPageModule) },
  { path: 'popover-component', loadChildren: () => import('./pages/popover-component/popover-component.module').then( m => m.PopoverComponentPageModule) },
  {
    path: 'moodpopover',
    loadChildren: () => import('./pages/moodpopover/moodpopover.module').then( m => m.MoodpopoverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
