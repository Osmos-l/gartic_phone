import { Component, Input, OnInit } from '@angular/core';

const DEFAULT_VALUE: number = 30;

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
    let gameTimer = setInterval(() => 
    {
      if (this.value == 0) {
        this.stopTimer(); 
      } else {this.value--}
    }, 1000);
  }
}
