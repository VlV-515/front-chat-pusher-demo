import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
declare const Pusher: any;

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  pusher: any;
  messagesChannel: any;

  constructor() {
    this.initializePusher();
  }

  initializePusher(): void {
    this.pusher = new Pusher(environment.pusher.key, {
      authEndpoint: `${environment.pusher.url}/pusher/auth`,
    });
    this.messagesChannel = this.pusher.subscribe('private-all-messages');
  }
}
