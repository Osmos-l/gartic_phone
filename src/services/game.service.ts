import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _API: String = "http://localhost:8080";

  constructor(
    private httpClient: HttpClient,
    private socket: Socket,
    private router: Router) {}

  create(creator: Player) {
    this.httpClient.post<Game>(`${this._API}/games`, creator)
    .subscribe(
      game => {
        localStorage.setItem('game', JSON.stringify(game));
        // TODO: navigate to default game component
        this.router.navigate(["lobby/" + game.id]);
      },
      err => {
        console.log('error => ' + err);
        // TODO: Display error
      }
    );
  }

  join(id: String, player: Player): Observable<Game> {
    this.socket.on('connection', (socket) => { console.log('Socket ' + socket.id); });
    return this.httpClient.post<Game>(`${this._API}/games/${id}`, player);
  }
}
