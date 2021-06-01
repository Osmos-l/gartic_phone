import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {
    
  @Input()
  localPlayer: Player;

  @Input()
  game: Game;

  constructor() { }

  ngOnInit(): void {
    this.getDrawToGuess();
    console.log(this.localPlayer)
    console.log(this.game)
  }

  getDrawToGuess() {
    this.localPlayer.toGuess = this.game.players.find(player => player.username == this.localPlayer.username).toGuess;
  }
}
