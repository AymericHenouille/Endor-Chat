import { Component, EventEmitter, Output } from '@angular/core';
import { Room } from 'src/app/shared/models/room.model';

@Component({
  selector: 'app-add-room-button',
  templateUrl: './add-room-button.component.html',
  styleUrls: ['./add-room-button.component.scss']
})
export class AddRoomButtonComponent {

  protected showModal: boolean = false;

  @Output() public newRoom: EventEmitter<Room> = new EventEmitter<Room>();

  protected createRoom(roomName: string): void {
    this.newRoom.emit({
      name: roomName,
      members: [],
    });
    this.showModal = false;
  }

}
