import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPollPage } from './show-poll.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPollPage
  },
  {
    path: ':pollId',
    component: ShowPollPage
  },
  {
    path: 'show-results/:pollId',
    loadChildren: () => import('./show-results/show-results.module').then( m => m.ShowResultsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPollPageRoutingModule {}
