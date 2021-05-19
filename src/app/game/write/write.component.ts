import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { GameService } from 'src/services/game.service';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  @Input()
  game: Game;

  @Input() 
  localPlayer: Player;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService,
              private socketService: SocketService) {}

  ngOnInit(): void {
    this.form = this.buildForm();
    this.socketService.sendWriteMoment(this.game.id);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      sentence: ['', Validators.required]
    });
  }

  sendSentence(): void {
    this.gameService.sendSentence(this.form.value.sentence, this.game.id, this.localPlayer);
  }
}
