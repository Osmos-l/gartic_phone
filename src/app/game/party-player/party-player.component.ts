import { Component, Input, OnInit } from '@angular/core';
import { Pictures } from 'src/models/pictures';
import { Player } from 'src/models/player';

@Component({
  selector: 'app-party-player',
  templateUrl: './party-player.component.html',
  styleUrls: ['./party-player.component.scss']
})
export class PartyPlayerComponent implements OnInit {

  @Input()
  player: Player = {
    "id": null,
    "username": null,
    "picture": Pictures.MALE
  };

  constructor() { }

  ngOnInit(): void {
  }

}
