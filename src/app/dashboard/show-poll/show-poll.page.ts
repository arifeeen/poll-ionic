import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.page.html',
  styleUrls: ['./show-poll.page.scss'],
})
export class ShowPollPage implements OnInit {
  pollId;
  pollInfo;
  selectedOption;
  internalId;

  constructor(private pollService: PollService, private loadingController: LoadingController, private alertController: AlertController) { }

  ngOnInit() {
  }

  getPoll() {
    this.loadingController.create({ keyboardClose: true, message: 'Loading Poll' }).then(load => {
      load.present();
      this.pollService.getPoll(this.pollId).subscribe(res => {
        load.dismiss();
        this.internalId = this.pollId;
        this.pollInfo = res.body[0];

      }, error => {
        if (error.status === 404) {
          load.dismiss();
          this.alertController.create({
            header: 'Not found',
            buttons: ['ok'],
            message: 'Poll Id entered is not valid. Please try again'
          }).then(alert => {
            alert.present();
          });
        } else if (error.status === 500) {
          load.dismiss();
          this.alertController.create({
            header: 'Server Error',
            buttons: ['ok'],
            message: 'Internal Server Error. Please try again.'
          }).then(alert => {
            alert.present();
          });
        }

      });

    });

  }

  savePoll() {
    console.log('selectedOption', this.selectedOption);
  }

}
