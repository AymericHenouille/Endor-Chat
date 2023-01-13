import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, OperatorFunction, Subscription, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {

  protected userName!: string;
  protected room!: Room;
  private _userName!: Subscription;
  private _room!: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly roomService: RoomService,
    private readonly route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this._userName = this.authService.user$.pipe(
      filter(user => !!user),
      map(user => user?.credential.email ?? '')
    ).subscribe(name => this.userName = name);
    this._room = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter(param => !!param) as OperatorFunction<string | null | undefined, string>,
      switchMap(param => this.roomService.getRoomById(param))
    ).subscribe(room => this.room = room);
  }

  public ngOnDestroy(): void {
    this._userName.unsubscribe();
    this._room.unsubscribe();
  }

}
