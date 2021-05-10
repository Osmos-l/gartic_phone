import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from '../game';
import { NewGameService } from './new-game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private newGameService: NewGameService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      
    });
  }

  createGame(): void {
    this.newGameService.create(new Game("test"));
  }
}
