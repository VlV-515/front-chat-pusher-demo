import { PusherService } from './../pusher.service';
import { Component, OnInit } from '@angular/core';
interface Message {
  text: string;
  user: string;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  userName;
  messageText;
  messages: Array<Message> = [];
  constructor(private pushSvc: PusherService) {}

  ngOnInit() {
    this.pushSvc.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }
  sendMessage(user: string, text: string) {
    const message: Message = {
      user: user,
      text: text,
    };
    this.pushSvc.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }
}
