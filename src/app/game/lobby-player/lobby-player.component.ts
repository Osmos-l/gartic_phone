import { Component, Input, OnInit } from '@angular/core';
import { Pictures } from 'src/models/pictures';
import { Player } from 'src/models/player';

@Component({
  selector: 'app-lobby-player',
  templateUrl: './lobby-player.component.html',
  styleUrls: ['./lobby-player.component.scss']
})
export class LobbyPlayerComponent implements OnInit {

  @Input()
  player: Player = {
    "username": null,
    "picture": Pictures.MALE
  }

  constructor() { }

  ngOnInit(): void {
  }
}
