import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  @Input()
  game: Game;

  color: string;
  thickness: number;
  resetDrawArea: boolean = false;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.sendDrawMoment(this.game.id);
  }

  onClick(arg: string | number | boolean): void {
    if (typeof(arg) === "string" ) {
      this.changeColor(arg);
    } else if (typeof(arg) === "number") {
      // TODO: change width of drawing
      this.thickness = arg;
    } else {
      // TODO: Reset canvas
    }
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }

  updateLineTchikness(thickness: number) {
    this.thickness = thickness;
  }

  resetCanvas(): void {
    this.resetDrawArea = true;
  }

  resetOk(): void {
    this.resetDrawArea = false;
  }

}
