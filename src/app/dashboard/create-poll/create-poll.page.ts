import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';
import { Poll } from 'src/app/models/poll.model';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.page.html',
  styleUrls: ['./create-poll.page.scss'],
})
export class CreatePollPage implements OnInit {
  question;
  options;
  constructor(private pollService: PollService, private loadingController: LoadingController, private alertController: AlertController) { }

  ngOnInit() {
  }

  savePoll() {
    const options = this.options.split(',').map(item => {
      return { value: item, counter: 0 }
    });
    const poll = new Poll(this.question, options);
    this.loadingController.create({
      keyboardClose: true,
      message: 'Saving Poll'
    }).then(saveController => {
      saveController.present();
      this.pollService.savePoll(poll).subscribe(res => {
        saveController.dismiss();
        this.alertController.create({
          header: 'Please share the following link for poll',
          message: `https://poll-builder.firebaseapp.com/dashboard/show-poll/${(res as any).pollId}`,
          buttons: ['ok']
        }).then(alrtController => {
          alrtController.present();
        })
      })
    })

  }

}
