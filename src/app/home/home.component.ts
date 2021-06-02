import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pictures } from 'src/models/pictures';
import { Player } from 'src/models/player';
import { NotificationService } from 'src/services/notification.service';
import { SocketService } from 'src/services/socket.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService,
              private notificationService: NotificationService,
              private socketService: SocketService) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      gameId: ['', Validators.required]
    });
  }

  joinGame(): void {
    const { username, gameId } = this.form.value;
    
    if (!username || !gameId) {
      this.notificationService.error("Un nom d'utilisateur et l'identifiant d'une partie sont requis pour la rejoindre.");
      return;
    }

    const player: Player = {
      "picture": Pictures.MALE,
      username,
      "sentence": "",
      "toGuess": ""
    };

    this.gameService.join(gameId, player);
  }

  retrieveGame(): void {
    const id = this.gameService.getGameId();

    if (id) {
      this.socketService.connect();
    }
  }

  createGame(): void {
    const username = this.form.value.username;

    if (!username) {
      this.notificationService.error("Un nom est requis pour créer une partie.");
      return; 
    }

    const creator: Player = {
      "picture": Pictures.MALE,
      username,
      "sentence": "",
      "toGuess": ""
    };

    this.gameService.create(creator);
  }
}
