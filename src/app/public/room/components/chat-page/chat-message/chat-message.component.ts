import { Component, Input } from '@angular/core';
import { Message } from 'src/app/shared/models/room.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {

  @Input() public message!: Message;

}
