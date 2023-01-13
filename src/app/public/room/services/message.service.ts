import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, doc, DocumentReference, Firestore, orderBy, Query, query } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Message, Room } from 'src/app/shared/models/room.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private readonly firestore: Firestore,
  ) { }

  public getMessagesByRoomId(id: string): Observable<Message[]> {
    const roomsRef: CollectionReference<Room> = collection(this.firestore, 'rooms') as CollectionReference<Room>;
    const documentRef: DocumentReference<Room> = doc(roomsRef, id);
    const messagesRef: CollectionReference<Message> = collection(documentRef, 'messages') as CollectionReference<Message>;
    const queryMessage: Query<Message> = query(messagesRef, orderBy('date', 'asc'));
    return collectionData<Message>(queryMessage, { idField: 'id' });
  }

  public sendMessage(roomId: string, message: Message): Promise<void> {
    const roomsRef: CollectionReference<Room> = collection(this.firestore, 'rooms') as CollectionReference<Room>;
    const documentRef: DocumentReference<Room> = doc(roomsRef, roomId);
    const messageRef: CollectionReference<Message> = collection(documentRef, 'messages') as CollectionReference<Message>;
    return addDoc(messageRef, { ...message, date: new Date().getTime() }).then();
  }

}
