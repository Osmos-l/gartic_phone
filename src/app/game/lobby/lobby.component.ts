import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

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
  }
}
