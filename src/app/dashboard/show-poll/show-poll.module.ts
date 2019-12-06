import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPollPageRoutingModule } from './show-poll-routing.module';

import { ShowPollPage } from './show-poll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPollPageRoutingModule
  ],
  declarations: [ShowPollPage]
})
export class ShowPollPageModule {}
