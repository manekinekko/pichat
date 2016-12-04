import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { CameraService } from './camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  @ViewChild('videoRef') videoRef: ElementRef;
  @ViewChild('canvasRef') canvasRef: ElementRef;

  @Output() onPicture: EventEmitter<string>;
  @Output() onCameraOn: EventEmitter<string>;

  width = 200;
  height = 200;
  
  constructor(private cm: CameraService) {
    this.onPicture = new EventEmitter<string>();
    this.onCameraOn = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  request() {
    this.startPlayer()
  }

  startPlayer() {
    this.cm.request().then( blob => {
      const player = this.videoRef.nativeElement;
      player.src = blob;
      player.play();

      this.onCameraOn.emit(blob);
    });
  }

  takePicture() {
    const canvas = this.canvasRef.nativeElement
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.getContext('2d').drawImage(this.videoRef.nativeElement, 0, 0, this.width, this.height);
    const data = canvas.toDataURL('image/png');

    this.onPicture.emit(data);
  }

}
