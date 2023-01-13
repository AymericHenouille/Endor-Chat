import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-room-navigation',
  templateUrl: './room-navigation.component.html',
  styleUrls: ['./room-navigation.component.scss']
})
export class RoomNavigationComponent implements OnInit, OnDestroy {

  protected rooms!: Room[];
  private _rooms!: Subscription;

  constructor(
    private readonly roomService: RoomService,
  ) { }

  public ngOnInit(): void {
    this._rooms = this.roomService.rooms$.subscribe(rooms => this.rooms = rooms);
  }

  public ngOnDestroy(): void {
    this._rooms.unsubscribe();
  }

  public addRoom(room: Room): Promise<void> {
    return this.roomService.createRoom(room);
  }

}
