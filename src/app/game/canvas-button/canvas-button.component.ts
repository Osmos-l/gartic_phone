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

  colorStyle : string = 'FFFFFF';

  @Input()
  color: string = '';

  @Input()
  width: number = -1;

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
    } else if (this.width !== -1) {
      arg = this.width;
    } else if (event && event.target && event.target.value) { // COLOR PICKER
      arg = event.target.value;
    }

    this.onClick.emit(arg);
  }

}
