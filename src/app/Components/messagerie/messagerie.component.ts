import { MessageService } from './../../Services/message.service';
import { IMessage } from './../../Models/imessage';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent implements OnInit, OnDestroy {
  messages : IMessage[] = [];

  constructor(private _service : MessageService){}

  ngOnDestroy(): void {
    this._service.setHasRead();
  }

  ngOnInit(): void {
    this.messages = this._service.getMessages();
  }

}
