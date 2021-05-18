import { Component, Input, OnInit } from '@angular/core';
import { Game, GameStatus } from 'src/models/game';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  @Input()
  game: Game;

  gameStatus = GameStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
