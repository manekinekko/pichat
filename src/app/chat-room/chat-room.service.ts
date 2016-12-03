import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ChatRoomService {

  rooms;

  constructor(private af: AngularFire) {
    this.rooms = this.af.database.list('/rooms', {
      query: {
        orderByKey: true
      }
    });
  }

  addRoom(roomName: string) {
    return this.rooms.push(roomName);
  }

  getRooms() {
    return this.rooms;
  }

  getRoom(roomKey) {
    return this.af.database.list(`/rooms/${roomKey}/messages`);
  }

  addMessage(roomKey, message) {
    const room = this.af.database.list(`/rooms/${roomKey}/messages`);
    return room.push(message);
  }

}
