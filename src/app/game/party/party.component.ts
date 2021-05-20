import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Game, GameStatus } from 'src/models/game';
import { Player } from 'src/models/player';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  @Input()
  game: Game;

  @Input()
  localPlayer: Player;

  gameStatus = GameStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
