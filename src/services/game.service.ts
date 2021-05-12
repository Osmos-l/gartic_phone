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

  create(creator: Player) {
    this.httpClient.post<Game>(`${environment.serverUrl}/games`, creator)
      .subscribe(game => {
        localStorage.setItem('player', JSON.stringify(creator));
        localStorage.setItem('game', JSON.stringify(game));
        // TODO: navigate to default game component
        this.router.navigate(["lobby/" + game.id]);
      }, err => {
        alert('Impossible de créer la partie.');
      }
    );
  }

  join(id: string, player: Player) {
    this.httpClient.post<Game>(`${environment.serverUrl}/games/${id}`, player)
      .subscribe(game => {
        this.socketService.sendJoin(id, player);
        this.socketService.getJoinResp().subscribe(gameData => {
          localStorage.setItem('player', JSON.stringify(player));
          localStorage.setItem('game', JSON.stringify(gameData));
          // TODO: navigate to default game component
          this.router.navigate(["lobby/" + game.id]);
        });
      }, err => { 
        alert('Impossible de rejoindre la partie');
      }
    );;
  }
}
