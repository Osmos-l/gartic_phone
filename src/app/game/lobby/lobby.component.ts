import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  @Input()
  game: Game;

  @Input()
  localPlayer: Player;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  launchGame(): void {
    this.gameService.start(this.game, this.localPlayer);
  }
}
