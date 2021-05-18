import { Component, Input, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable,fromEvent } from 'rxjs';
import { Canvas } from '../../../models/canvas';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  @ViewChild('drowArea') public canvasElement : ElementRef;
  canvasHTML : HTMLCanvasElement;
  canvas : Canvas;
  constructor() { }

  ngOnInit(): void {
  }

  initCanvas(canvas: HTMLCanvasElement): Canvas{
    return new Canvas (canvas);
  }

  ngAfterViewInit(): void{
    this.canvas = this.canvasElement.nativeElement;
    this.canvas = this.initCanvas(this.canvasHTML);
  }

  captureEvent(canvas : HTMLCanvasElement) {
    
    const source = fromEvent(this.canvasHTML,'pointermove');

    source.subscribe(val =>this.canvas.listeningPointerMove(val) );
    
  }

}
