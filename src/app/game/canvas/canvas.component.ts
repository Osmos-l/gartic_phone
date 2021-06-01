import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

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

  onClick(arg: string | number | boolean): void {
    if (typeof(arg) === "string" ) {
      this.color = arg;
    } else if (typeof(arg) === "number") {
      this.thickness = arg;
    } else {
      this.resetDrawArea = true;
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
