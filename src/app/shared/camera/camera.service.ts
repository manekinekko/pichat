import { Injectable } from '@angular/core';

@Injectable()
export class CameraService {

  constructor() { }

  request() {
    const constraints = {
      video: true
    };
    return navigator.mediaDevices.getUserMedia(constraints)
      .then( stream => {
        return (window.URL || (window as any).webkitURL).createObjectURL(stream);
      });
  }

}
