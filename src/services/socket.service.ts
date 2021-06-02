import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { WrappedSocket } from 'ngx-socket-io/src/socket-io.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
  }

  connect(): void {
    this.socket.connect();
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  disconnectFromGame(gameId: string, playerName: string): void {
    this.socket.emit('leaveGame', { gameId, playerName });
    // this.disconnect();
  }

  sendCreate(gameId: string): void {
    this.connect();
    this.socket.emit('create', gameId);
  }

  sendJoin(gameId: string): void {
    this.connect();
    this.socket.emit('join', gameId);
  }

  sendStart(gameId: string): void {
    this.socket.emit('start', gameId);
  }

  getJoinResp(): Observable<Game> {
    return this.socket.fromEvent<Game>('game');
  }

  sendWriteMoment(gameId: string, player: Player): void {
    this.socket.emit('writeMoment', { gameId, player });
  }

  sendDrawMoment(gameId: string): void {
    this.socket.emit('drawMoment', gameId);
  }
}
