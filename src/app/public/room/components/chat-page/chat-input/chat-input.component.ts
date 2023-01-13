import { Component, Input } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {

  @Input() public roomId!: string;
  @Input() public userName!: string;

  protected message: string = '';
  protected isLoading: boolean = false;

  constructor(private readonly messageService: MessageService) { }

  protected async sendMessage(): Promise<void> {
    this.isLoading = true;
    await this.messageService.sendMessage(this.roomId, {
      sender: this.userName,
      text: this.message,
    });
    this.message = '';
    this.isLoading = false;
  }

}
