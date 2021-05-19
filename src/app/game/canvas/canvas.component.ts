import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  color: string;

  newWidth: boolean = false;

  resetDrawArea: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }

  resetCanvas(): void {
    this.resetDrawArea = true;
  }

  changeWidthCanvas(): void {
    this.newWidth = true;
  }

  changeWidthOk(): void {
    this.newWidth = false;
  }

  resetOk(): void {
    this.resetDrawArea = false;
  }

}
