import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { NoChatSectionPageComponent } from './components/no-chat-section-page/no-chat-section-page.component';
import { RoomPageComponent } from './components/room-page/room-page.component';

const ROUTES: Routes = [
  { path: '', component: RoomPageComponent, children: [
    { path: ':id', component: ChatPageComponent },
    { path: '', component: NoChatSectionPageComponent, pathMatch: 'full' },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
