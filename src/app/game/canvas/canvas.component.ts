import { Component, Input, OnInit } from '@angular/core';
import { CanvasLineThickness } from 'src/models/canvas';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  colors: string[] = [
    "#000000",
    "#666666",
    "#0050cd",
    "#ffffff",
    "#aaaaaa",
    "#26c9fa",
    "#017420",
    "#691506",
    "#964112",
    "#11b03c",
    "#ff0013",
    "#ff7829",
    "#b0701c",
    "#99004e",
    "#cb5a57",
    "#ffc126",
    "#ff008f",
    "#feafa8"
  ];

  thicknesses: number[] = [
    CanvasLineThickness.SMALL,
    CanvasLineThickness.MEDIUM,
    CanvasLineThickness.BIG
  ]

  actions: string[] = [
    "fill",
    "pencil",
    "reset"
  ]

  @Input()
  game: Game;

  @Input()
  localPlayer: Player;

  color: string;
  thickness: number;
  resetDrawArea: boolean = false;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.getPlayerSentence();
    this.socketService.sendDrawMoment(this.game.id);
  }

  onColorPickerChange(event: any): void {
    this.onClick(event.target.value);
  }

  onClick(arg: string | number): void {
    if (typeof(arg) === "string" ) {
      if (arg === 'fill') {
        // TODO: canvas fill
      } else if (arg === 'reset') {
        this.resetDrawArea = true;
      } else if (arg === 'pencil') {
        // TODO: canvas normal draw mode
      } else {
        this.color = arg;
      }
    } else if (typeof(arg) === "number") {
      this.thickness = arg;
    }
  }

  resetOk(): void {
    this.resetDrawArea = false;
  }

  getPlayerSentence(): void {
    this.localPlayer.sentence = 
      this.game.players.find(player => 
        player.username === this.localPlayer.username
      ).sentence;
  }
}
