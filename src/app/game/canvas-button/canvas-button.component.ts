import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-canvas-button',
  templateUrl: './canvas-button.component.html',
  styleUrls: ['./canvas-button.component.scss']
})
export class CanvasButtonComponent implements OnInit {
  
  @Output()
    onClick : EventEmitter<string | number | boolean> = new EventEmitter();

  @Input()
  color: string = '';

  @Input()
  thickness: number = -1;

  @Input()
  content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

   /**
    * Emit the content of the button to his parent :
    * string, number or false in default case
    */
  emitClick(event?: any): void {
    let arg: string | number | boolean = false;
    if (this.color !== '') {
      arg = this.color;
    } else if (this.thickness !== -1) {
      arg = this.thickness;
    } else if (event && event.target && event.target.value) { // COLOR PICKER
      arg = event.target.value;
    }

    this.onClick.emit(arg);
  }

}
