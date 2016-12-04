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

  addRoom(room: any) {
    return this.rooms.push(room);
  }

  getRooms() {
    return this.rooms;
  }

  getRoom(roomKey): any {
    return this.af.database.object(`/rooms/${roomKey}`);
  }

  getMessages(roomKey): any {
    return this.af.database.list(`/rooms/${roomKey}/messages`, {
      query: {
        limitToLast: 100,
      }
    });
  }

  getRoomAndMessages(roomKey) {
    return {
      room: this.getRoom(roomKey),
      messages: this.getMessages(roomKey)
    };
  }

  addMessage(roomKey, message) {
    const messages = this.getMessages(roomKey);
    return messages.push(message);
  }

}
