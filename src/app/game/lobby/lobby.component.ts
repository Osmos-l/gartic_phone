import { Component, Input } from '@angular/core';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { GameService } from 'src/services/game.service';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {

  @Input()
  game: Game;

  @Input()
  localPlayer: Player;

  constructor(private gameService: GameService,
              private notificationService: NotificationService) { }

  launchGame(): void {
    this.gameService.start(this.game, this.localPlayer);
  }

  copyGameIdInClipBoard(): void {
    this.notificationService.success("Identifiant de la partie enregistré dans le presse-papier !");

    navigator.clipboard.writeText(this.game.id);
    let idGameArea = document.getElementsByClassName("copy")[0] as HTMLElement;
    idGameArea.style.color = "#E63946";
    setTimeout(() => { idGameArea.style.color = "white"; }, 1000);
  }
}
