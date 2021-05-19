import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  color : string;

  newWidth : boolean = false;

  resetDrowArea : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(newColor : string){
    this.color = newColor;
  }

  resetCanvas(){
    this.resetDrowArea = true;
  }

  changeWidthCanvas(){
    this.newWidth = true;
  }

  changeWidthOk(){
    this.newWidth = false;
  }

  resetOk(){
    this.resetDrowArea = false;
  }

}
