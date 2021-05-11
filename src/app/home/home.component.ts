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
    })
  }

  joinGame(): void {
    const { username, gameId } = this.form.value;
    if (!username || !gameId) {
      console.log("Bad username or gameID");
      console.log(username);
      console.log(gameId);
      return; // TODO: Display error on view
    }

    const player: Player = {
      "id": "0", // Will be define by backend,
      "picture": Pictures.MALE,
      username
    }

    this.gameService.join(gameId, player)
    .subscribe(
      game => {
        // Should navigate into "lobby" + game.id
        this.router.navigate(["lobby/" +game.id]);
      },
      err => {
        // Should display error on view

        // Navigate to the view in all case ONLY FOR DEV
        this.router.navigate(["lobby/stub"]);
      }
    );
  }

  createGame(): void {
    const username = this.form.value.username;
    if (!username) {
      console.log("bad usernam");
      console.log(username);
      return; // TODO: Display error on view
    }

    const creator: Player = {
      "id": "0", // Will be define by backend
      "picture": Pictures.MALE, // STUB
      username
    }

    this.gameService.create(creator)
    .subscribe(
      game => {
        // Should navigate into "lobby" + game.id
        this.router.navigate(["lobby/" +game.id]);
      },
      err => {
        // Should display error on view

        // Navigate to the view in all case ONLY FOR DEV
        this.router.navigate(["lobby/stub"]);
      }
    );
  }
}
