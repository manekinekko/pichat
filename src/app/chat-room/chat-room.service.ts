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
    return this.af.database.object(`/rooms/${roomKey}`);
  }

  getMessages(roomKey) {
    return this.af.database.list(`/rooms/${roomKey}/messages`);
  }

  getRoomAndMessages(roomKey) {
    return {
      room: this.getRoom(roomKey),
      messages: this.getMessages(roomKey)
    };
  }

  addMessage(roomKey, message) {
    const room = this.getRoom(roomKey);
    const messages = this.af.database.list(`/rooms/${roomKey}/messages`, {
      query: {
        limitToLast: 100,
      }
    });
    return messages.push(message);
  }

}
