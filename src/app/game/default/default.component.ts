import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game, GameStatus } from 'src/models/game';
import { Player } from 'src/models/player';
import { GameService } from 'src/services/game.service';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  game: Game;
  localPlayer: Player;
  gameStatus = GameStatus;

  constructor(private router: Router,
              private socketService: SocketService,
              private gameService: GameService) {}

  ngOnInit(): void {
    this.initContents();
    this.connectToSocket();
  }

  initContents(): void {
    let game = this.gameService.getGame();
    let localPlayer = this.gameService.getLocalPlayer();

    // On router.navigate or refreshed website
    if (game && localPlayer) {
      this.game = game;
      this.localPlayer = localPlayer;
      // ONLY FOR DEV (force game.status)
      this.game.status = 3;
    } else {
      this.router.navigate(['']);
    }
  }

  connectToSocket(): void {
    this.socketService.getJoinResp()
        .subscribe(game => {
        this.game = game;
        this.gameService.setGame(game);
      }
    )
  }
}
