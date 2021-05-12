import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';

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

  constructor() { }

  ngOnInit(): void {
  }

  launchGame(): void {
    // TODO: Call backend to start the game
    // check if the caller is the game.creator (backend & frontend)
    alert("STUB: Launch game");
  }
}
