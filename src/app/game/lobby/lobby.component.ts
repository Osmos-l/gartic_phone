import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { Pictures } from 'src/models/pictures';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  @Input()
  game: Game;

  constructor() { }

  ngOnInit(): void {
    console.log('lobby component:');
    console.log(this.game);
  }

}
