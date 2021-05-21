import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const DEFAULT_VALUE: number = environment.time;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {
 
  @Input()
  value: number;
  gameTimer;
  
  constructor() { 
    this.value = DEFAULT_VALUE;
  }

  stopTimer(): void {
    clearInterval(this.gameTimer);
  }

  ngOnInit(): void {
    let gameTimer = setInterval(() => {
      if (this.value == 0) {
        this.stopTimer(); 
      } else {this.value--}
    }, environment.timerMsToSec);
  }
}
