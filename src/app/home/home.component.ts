import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../game/player';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private homeService: HomeService) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      nickname: ['', Validators.required],
      gameId: ['', Validators.required]
    })
  }

  joinGame(): void {
    this.homeService.join(this.form.value.gameId, new Player(this.form.value.nickname));
  }
}
