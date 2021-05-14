import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private httpClient: HttpClient,
    private socketService: SocketService,
    private router: Router) {}

  getGame(): Game | null {
    return JSON.parse(localStorage.getItem('game'));
  }

  getLocalPlayer(): Player | null {
    return JSON.parse(localStorage.getItem('player'));
  }

  setGame(game: Game): void {
    localStorage.setItem('game', JSON.stringify(game));
  }

  setLocalPlayer(player: Player): void {
    localStorage.setItem('player', JSON.stringify(player));
  }

  create(creator: Player): void {
    this.httpClient.post<Game>(`${environment.serverUrl}/games`, creator)
      .subscribe(game => {
        this.socketService.sendCreate(game.id);
        this.setGame(game);
        this.setLocalPlayer(game.creator);
        this.router.navigate(["lobby/"]);
      }, err => {
        alert('Impossible de créer la partie.');
      }
    );
  }

  join(id: string, player: Player): void {
    this.httpClient.post<Game>(`${environment.serverUrl}/games/${id}`, player)
      .subscribe(game => {
        // Alert socket we join the game
        this.socketService.sendJoin(id);

        // TODO: Find a way that can return the player with player.id generated
        this.setLocalPlayer(player);
        this.setGame(game);

        this.router.navigate(["lobby/"]);
      }, err => { 
        alert('Impossible de rejoindre la partie');
      }
    );
  }
}
