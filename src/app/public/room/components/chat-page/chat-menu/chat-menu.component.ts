import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Room } from 'src/app/shared/models/room.model';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.component.html',
  styleUrls: ['./chat-menu.component.scss']
})
export class ChatMenuComponent {

  @Input() public room!: Room;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  protected async logout(): Promise<void> {
    await this.authService.signOut();
    return this.router.navigate(['/']).then();
  }

}
