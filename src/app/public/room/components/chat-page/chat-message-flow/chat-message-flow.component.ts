import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/shared/models/room.model';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-chat-message-flow',
  template: `
    <div class="columns" *ngFor="let message of messages">
      <app-chat-message
        [message]="message"
        class="column is-three-quarters"
        [class.is-offset-one-quarter]="isUserMessage(message)">
      </app-chat-message>
    </div>
  `
})
export class ChatMessageFlowComponent implements OnChanges, OnDestroy {

  @Input() public userName!: string;
  @Input() public roomId!: string;
  protected messages: Message[] = [];
  private _messages!: Subscription;

  constructor(
    private readonly messageService: MessageService
  ) { }

  public ngOnChanges(): void {
    this._messages?.unsubscribe();
    this._messages = this.messageService.getMessagesByRoomId(this.roomId)
      .subscribe(messages => this.messages = messages);
  }

  public ngOnDestroy(): void {
    this._messages.unsubscribe();
  }

  protected isUserMessage(message: Message): boolean {
    return this.userName === message.sender;
  }

}
