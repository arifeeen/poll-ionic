import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  { path: '', redirectTo: 'create-poll', pathMatch: 'full' },
  {
    path: '',
    component: DashboardPage,
    children: [{
      path: 'create-poll',
      loadChildren: () => import('./create-poll/create-poll.module').then( m => m.CreatePollPageModule)
    },
    {
      path: 'show-poll',
      loadChildren: () => import('./show-poll/show-poll.module').then( m => m.ShowPollPageModule)
    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
