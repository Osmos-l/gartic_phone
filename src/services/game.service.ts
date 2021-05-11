import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  create(creator: Player): Observable<Game> {
    return this.httpClient.post<Game>('http://localhost:8080/games', creator);
  }

  join(id: Number, player: Player): Observable<Game> {
    return this.httpClient.post<Game>(`http://localhost:8080/games/${id}`, player);
  }
}
