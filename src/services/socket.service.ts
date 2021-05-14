import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {}

  sendCreate(gameId: string) : void {
    this.socket.emit('create', gameId);
  }

  sendJoin(gameId: string): void {
    this.socket.emit('join', gameId);
  }

  getJoinResp(): Observable<Game> {
    return this.socket.fromEvent<Game>('game');
  }
}
