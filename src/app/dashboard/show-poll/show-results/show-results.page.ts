import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.page.html',
  styleUrls: ['./show-results.page.scss'],
})
export class ShowResultsPage implements OnInit {
  pollId;
  pollObject;

  constructor(private activatedRoute: ActivatedRoute, private loadingController: LoadingController, private pollService: PollService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('pollId')) {
        this.pollId = params.get('pollId');
        this.loadingController.create({
          keyboardClose: true,
          message: 'loading data'
        }).then(load => {
          load.present();
          this.pollService.getPoll(this.pollId).subscribe(res => {
            load.dismiss();
            this.pollObject = res.body;
            console.log('res body', this.pollObject);
          });

        });
      }

    })
  }

}
