import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPollPage } from './show-poll.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPollPageRoutingModule {}
