import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {}

  sendJoin(gameId: string, player: Player): void {
    this.socket.emit('join', { gameId, player });
  }

  getJoinResp(): Observable<Game> {
    return this.socket.fromEvent<Game>('game');
  }
}
