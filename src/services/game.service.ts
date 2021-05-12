import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _API: String = "http://localhost:8080";

  constructor(private httpClient: HttpClient,
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

  join(id: Number, player: Player): Observable<Game> {
    return this.httpClient.post<Game>(`${this._API}/games/${id}`, player);
  }
}
