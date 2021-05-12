import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  game: Game;

  constructor(private router: Router) { 
    let game = JSON.parse(localStorage.getItem('game'));
    if (game) {
      this.game = game;
      console.log('game is ok');
    } else {
      console.log('redirect')
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
  }

}
