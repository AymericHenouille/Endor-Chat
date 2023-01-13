import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, doc, DocumentReference, Firestore, query, Query, updateDoc, where } from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { filter, firstValueFrom, map, Observable, OperatorFunction, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Room } from 'src/app/shared/models/room.model';

@Injectable()
export class RoomService {

  constructor(
    private authService: AuthService,
    private firestore: Firestore
  ) { }


  public get rooms$(): Observable<Room[]> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      map(user => user?.id ?? ''),
      switchMap((id: string) => {
        const roomsRef: CollectionReference<Room> = collection(this.firestore, 'rooms') as CollectionReference<Room>;
        const sortedRooms: Query<Room> = query(roomsRef, where('members', 'array-contains', id));
        return collectionData<Room>(sortedRooms, { idField: 'id' });
      })
    );
  }

  public getRoomById(id: string): Observable<Room> {
    return this.rooms$.pipe(
      map(rooms => rooms.find(room => room.id === id)),
      filter(room => !!room) as OperatorFunction<Room | null |  undefined, Room>
    );
  }

  public async createRoom(room: Room): Promise<void> {
    const roomToSend: Partial<Room> = await this.buildRoom(room);
    const roomsRef: CollectionReference<Room> = collection(this.firestore, 'rooms') as CollectionReference<Room>;
    await addDoc(roomsRef, roomToSend);
  }

  public async updateRoom(room: Partial<Room> & { id: string }): Promise<void> {
    const roomToSend: Partial<Room> = await this.buildRoom(room);
    const roomsRef: CollectionReference<Room> = collection(this.firestore, 'rooms') as CollectionReference<Room>;
    const documentRef: DocumentReference<Room> = doc(roomsRef, room.id);
    return updateDoc(documentRef, roomToSend);
  }

  public deleteRoomById(id: string): Promise<void> {
    const roomsRef: CollectionReference<Room> = collection(this.firestore, 'rooms') as CollectionReference<Room>;
    const documentRef: DocumentReference<Room> = doc(roomsRef, id);
    return deleteDoc(documentRef);
  }

  private async buildRoom({...room}: Partial<Room>): Promise<Partial<Room>> {
    delete room.id;
    const userId: string = await firstValueFrom(this.authService.user$.pipe(
      filter(user => !!user),
      map(user => user?.id ?? '')
    ));
    const members: string[] = room.members ?? [];
    members.push(userId);
    return {
      ...room,
      members: members,
    };
  }
}
