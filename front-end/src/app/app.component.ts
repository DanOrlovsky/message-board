import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>
              <new-message (onPost)="messagePosted()"></new-message>
              <messages #messagesComponent></messages>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('messagesComponent') messagesComponent: MessagesComponent;

  title = 'Message Board';


  messagePosted() {
    this.messagesComponent.getMessages();
  }
}
