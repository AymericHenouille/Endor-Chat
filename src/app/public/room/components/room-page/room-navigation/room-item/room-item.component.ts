import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/models/room.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent {

  @Input() public room!: Room;

  constructor(private router: Router) { }

  @HostListener('click')
  public onClick(): void {
    this.router.navigate(['room', this.room.id]);
  }

}
