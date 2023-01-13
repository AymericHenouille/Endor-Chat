import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatInputComponent } from './components/chat-page/chat-input/chat-input.component';
import { ChatMessageFlowComponent } from './components/chat-page/chat-message-flow/chat-message-flow.component';
import { ChatMessageComponent } from './components/chat-page/chat-message/chat-message.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { NoChatSectionPageComponent } from './components/no-chat-section-page/no-chat-section-page.component';
import { AddRoomButtonComponent } from './components/room-page/room-navigation/add-room-button/add-room-button.component';
import { EditRoomComponent } from './components/room-page/room-navigation/edit-room/edit-room.component';
import { RoomItemComponent } from './components/room-page/room-navigation/room-item/room-item.component';
import { RoomNavigationComponent } from './components/room-page/room-navigation/room-navigation.component';
import { RoomPageComponent } from './components/room-page/room-page.component';
import { RoomRoutingModule } from './room-routing.module';
import { RoomService } from './services/room.service';
import { ChatMenuComponent } from './components/chat-page/chat-menu/chat-menu.component';
import { RoomMembersComponent } from './components/chat-page/room-members/room-members.component';



@NgModule({
  declarations: [
    RoomPageComponent,
    ChatPageComponent,
    NoChatSectionPageComponent,
    RoomNavigationComponent,
    RoomItemComponent,
    AddRoomButtonComponent,
    EditRoomComponent,
    ChatInputComponent,
    ChatMessageComponent,
    ChatMessageFlowComponent,
    ChatMenuComponent,
    RoomMembersComponent
  ],
  imports: [
    SharedModule,
    RoomRoutingModule,
    FormsModule
  ],
  providers: [RoomService]
})
export class RoomModule { }
