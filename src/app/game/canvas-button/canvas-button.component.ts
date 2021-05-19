import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-canvas-button',
  templateUrl: './canvas-button.component.html',
  styleUrls: ['./canvas-button.component.scss']
})
export class CanvasButtonComponent implements OnInit {

  @Output() changeColorRequest : EventEmitter<any> = new EventEmitter();
  @Output() resetCanvasRequest : EventEmitter<any> = new EventEmitter();
  @Output() changeWidthRequest : EventEmitter<any> = new EventEmitter();

  colorStyle : string = 'FFFFFF';
  constructor() { }

  ngOnInit(): void {
    
  }

  changeColorEmitter(newColor: string): void {
    this.changeColorRequest.emit(newColor);
    this.colorStyle = newColor;
  }

  resetCanvasEmitter(): void {
    this.resetCanvasRequest.emit();
  }

  changeWidthEmitter(): void {
    this.changeWidthRequest.emit();
  }
  
  colorPickerChange(event? : any): void {
    this.changeColorEmitter(event.target.value);
    
  }




}
