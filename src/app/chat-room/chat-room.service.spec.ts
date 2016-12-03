/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatRoomService } from './chat-room.service';

describe('ChatRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatRoomService]
    });
  });

  it('should ...', inject([ChatRoomService], (service: ChatRoomService) => {
    expect(service).toBeTruthy();
  }));
});
