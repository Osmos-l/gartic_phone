import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pictures } from 'src/models/pictures';
import { Player } from 'src/models/player';
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
              private router: Router) {
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
      alert("Un nom d'utilisateur et l'identifiant d'une partie est requis pour la rejoindre.")
      return;
    }

    const player: Player = {
      "id": null,
      "picture": Pictures.MALE,
      username
    }

    this.gameService.join(gameId, player)
                    .subscribe(game => { this.router.navigate(["lobby/" + game.id]); },
                              err => { alert("Impossible de rejoindre la partie."); });
  }

  createGame(): void {
    const username = this.form.value.username;

    if (!username) {
      alert("Un nom est requis pour créer une partie.")
      return; 
    }

    const creator: Player = {
      "id": null,
      "picture": Pictures.MALE,
      username
    }

    this.gameService.create(creator)
                    .subscribe(game => { this.router.navigate(["lobby/" + game.id]); },
                              err => { alert("Impossible de créer la partie."); });
  }
}
