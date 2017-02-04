import { Injectable } from '@angular/core';
import {Message} from './message';
import * as io from 'socket.io-client';

@Injectable()
export class MessageDataService {
  messages: Message[] = [];
  socket = null;
 
  constructor() {
    this.socket = io('http://localhost:3001');
    this.socket.on('messages', function(messages) {
      this.messages = messages
    }.bind(this));
  }

  // Simulate POST /messages
  addMessage(message: Message): MessageDataService {
    this.socket.emit("new-message", message);
    return this;
  }


  // Simulate GET /messages
  getAllMessages(): Message[] {
    return this.messages;
  }

  // Simulate GET /messages/:id
  getMessageById(id: string): Message {
    return this.messages
      .filter(message => message.id === id)
      .pop();
  }
 
  // Simulate PUT /messages/:id
  updateMessageById(id: string, values: Object = {}): Message {
    let message = this.getMessageById(id);
    if (!message) {
      return null;
    }
    Object.assign(message, values);
    return message;
  }

  addRecipient(message: Message, new_recipient: string) {
    let updatedMessage = this.updateMessageById(message.id, {
      recipients: message.recipients.push(new_recipient) 
    });
    return updatedMessage;
  }
}
