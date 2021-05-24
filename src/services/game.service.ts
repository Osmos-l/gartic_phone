import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { NotificationService } from './notification.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private httpClient: HttpClient,
    private socketService: SocketService,
    private router: Router,
    private notificationService: NotificationService) {}

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
        this.notificationService.error(err.error.Error);
        console.log(err.error.Error);
      }
    );
  }

  join(id: string, player: Player): void {
    this.httpClient.post<Game>(`${environment.serverUrl}/games/${id}`, player)
      .subscribe(game => {
        this.socketService.sendJoin(id);
        this.setLocalPlayer(player);
        this.setGame(game);
        this.router.navigate(["lobby/"]);
      }, err => { 
        this.notificationService.error(err.error.Error);
        console.log(err.error.Error);
      }
    );
  }

  start(game: Game, requester: Player): void {
    const id = game.id;

    if (requester.username !== game.creator.username) {
      return;
    }

    this.httpClient.post<Game>(`${environment.serverUrl}/games/${id}/start`, requester)
      .subscribe(game => {
        this.socketService.sendStart(id);
        this.setGame(game);
      }, err => { 
        this.notificationService.error(err.error.Error);
        console.log(err.error.Error);
      }
    );
  }

  sendSentence(sentence: string, gameId: string, player: Player): Observable<string> {
    return this.httpClient.post<string>(`${environment.serverUrl}/games/${gameId}/sentence`, { sentence, player })
          .pipe(
            catchError( err => { 
              this.notificationService.error(err.error);
              console.log(err.error);
              return "";
            })
          );
  }
}
