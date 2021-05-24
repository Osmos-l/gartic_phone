import { Component, Input,Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Canvas } from '../../../models/canvas';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  
  @Output()
  resetOk : EventEmitter<any> = new EventEmitter();

  @ViewChild('drawArea') 
  public canvasElement : ElementRef;

  canvas : Canvas;
  
  @Input() 
  set colorStyle(newColor: string) {
    this.canvas.setColor(newColor);
  }

  @Input() 
  set updateThickness(thickness : number) {
    this.canvas.updateLineThickness(thickness);
  }

  @Input() 
  set resetCanvas(resetArea : boolean) {
    this.canvas.clearContent();
    this.resetOk.emit();
  }
   
  timer: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    setTimeout(() => {
    }, 20000)
  }

  initCanvas(canvas: HTMLCanvasElement): Canvas { 
    return new Canvas(canvas);
  }

  ngAfterViewInit(): void {
    const canvasHTML = this.canvasElement.nativeElement;
    this.canvas = this.initCanvas(canvasHTML);
    // console.log(this.canvas);
  }

  pointerDown(): void {
    this.canvas.clickOn();
  }

  pointerUp(): void {
    this.canvas.clickOff();
  }

  pointerMove(event?: PointerEvent): void {
    this.canvas.listeningPointerMove(event);
  }

  setColor(newColor: string): void {
    this.canvas.setColor(newColor);
  }
}
