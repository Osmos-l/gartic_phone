import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

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
    this.gameService.sendSentence();
  }
}
