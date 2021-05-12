import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  game: Game;
  localPlayer: Player;

  constructor(private router: Router,
              private socketService: SocketService) { 
    let game = JSON.parse(localStorage.getItem('game'));
    let localPlayer = JSON.parse(localStorage.getItem('player'));

    // On router.navigate or refreshed website
    if (game && localPlayer) {
      this.game = game;
      this.localPlayer = localPlayer;
    } else {
      this.router.navigate(['']);
    }

    // Connect to future socket messages
    this.socketService.getJoinResp()
    .subscribe(
      game => {
        this.game = game;
        localStorage.setItem('game', JSON.stringify(game));
      }
    )
  }

  ngOnInit(): void {
  }

}
