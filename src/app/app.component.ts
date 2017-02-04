import { Component } from '@angular/core';
import {Message} from './message';
import {MessageDataService} from './message-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageDataService]
})
export class AppComponent {
  newMessage: Message = new Message();
  newRecipient: string = '';

  constructor(private messageDataService: MessageDataService) {
  }

  addMessage() {
    this.addRecipient();
    this.messageDataService.addMessage(this.newMessage);
    this.newMessage = new Message();
  }

  addRecipient(){
    if (this.newRecipient.length > 0) {
      this.messageDataService.addRecipient(this.newMessage, this.newRecipient);
      this.newRecipient = '';
    }
  }

  get messages() {
    return this.messageDataService.getAllMessages();
  }
}
