import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CanvasLineThickness } from 'src/models/canvas';

@Component({
  selector: 'app-canvas-buttons',
  templateUrl: './canvas-buttons.component.html',
  styleUrls: ['./canvas-buttons.component.scss']
})

export class CanvasButtonsComponent implements OnInit {

  @Output()
    onClick : EventEmitter<string | number | boolean> = new EventEmitter();

  colors: string[] = [
    "#000000", // BLACK
    "#ffffff", // WHITE
    "#FF3030", // RED
    "#35DEEC", // BLUE
    "#24F143" // GREEN 
  ];

  thicknesses: number[] = [
    CanvasLineThickness.SMALL,
    CanvasLineThickness.MEDIUM,
    CanvasLineThickness.BIG
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(arg: any): void {
    this.onClick.emit(arg);
  }

}
