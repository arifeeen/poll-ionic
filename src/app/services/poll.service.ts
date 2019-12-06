import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  url = environment.url;
  constructor(private http: HttpClient) { }


  savePoll(poll: Poll) {
    return this.http.post(this.url + 'create-poll', poll);
  }

  getPoll(pollId: string) {
     return this.http.get(this.url + 'get-poll/' + pollId );
  }
}
