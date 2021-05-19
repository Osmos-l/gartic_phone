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

  ngAfterViewInit(): void {
    this.canvasHTML = this.canvasElement.nativeElement;
    this.canvas = this.initCanvas(this.canvasHTML);
    console.log(this.canvas);
  }

  pointerDown(): void {
    this.canvas.clickOn();
  }

  pointerUp(): void {
    this.canvas.clickOff();
  }

  pointerMove(event? : PointerEvent): void {
    this.canvas.listeningPointerMove(event);
  }

}
