import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  @Input()
  game: Game;

  @Input() 
  player: Player;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      sentence: ['', Validators.required]
    });
  }

  sendSentence(): void {
    this.gameService.sendSentence(this.form.value, this.game.id, this.player);
  }
}
