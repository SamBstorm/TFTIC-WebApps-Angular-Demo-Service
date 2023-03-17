import { MessageService } from './../../Services/message.service';
import { IMessage } from './../../Models/imessage';
import { Component } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  sender! : string;
  message! : string;

  constructor(private _service: MessageService){}

  send() : void{
    let new_msg : IMessage = {
      sender : this.sender,
      message : this.message,
      date : new Date(),
      wasRead : false
    };
    this._service.addMessage(new_msg);
  }
}
