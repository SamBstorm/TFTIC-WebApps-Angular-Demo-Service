import { Injectable } from '@angular/core';
import { IMessage } from '../Models/imessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages : IMessage[] = [];

  constructor() { }

  getMessages() : IMessage[]{
    return this._messages;
  }

  addMessage(new_message : IMessage) : void{
    this._messages.push(new_message);
  }

  setHasRead() : void{
    for (const msg of this._messages) {
      msg.wasRead = true;
    }
  }
}
