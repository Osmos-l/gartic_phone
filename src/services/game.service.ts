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

  /* 
   * POST
   * User create an game and become the creator
   * Should return the game 
   */
  create(creator: Player): Observable<Game> {
    return this.httpClient.post<Game>('http://localhost:8080/games', creator);
  }

  /* 
   * get
   * User try to join a game with the game.id
   * Should return the game 
   */
  join(id: Number, player: Player): Observable<Game> {
    return this.httpClient.post<Game>(`http://localhost:8080/games/${id}`, player);
  }

  /* 
   * DELETE
   * User leave the game
   * Should return the game 
   */
  leave(gameId: String) {
    return null;
  }
}
