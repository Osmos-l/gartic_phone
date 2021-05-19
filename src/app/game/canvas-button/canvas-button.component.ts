import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-canvas-button',
  templateUrl: './canvas-button.component.html',
  styleUrls: ['./canvas-button.component.scss']
})
export class CanvasButtonComponent implements OnInit {

  @Output() changeColorRequest = new EventEmitter();
  colorStyle : string;

  constructor() { }

  ngOnInit(): void {

  }

  changeColor(newColor: string): void {
    this.changeColorRequest.emit(newColor);
     this.colorStyle = newColor;
  }

  



}
