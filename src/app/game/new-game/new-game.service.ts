import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game';

@Injectable({
  providedIn: 'root'
})
export class NewGameService {

  constructor(private httpClient: HttpClient) { }

  create(game: Game): Observable<Game> {
    return this.httpClient.post<Game>('http://localhost:8080/games', game);
  }
}
