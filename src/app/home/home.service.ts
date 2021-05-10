import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../game/player';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  public join(id: number, player: Player): Observable<Player> {
    return this.httpClient.post<Player>(`http://localhost:8080/games/${id}`, player);
  }
}
