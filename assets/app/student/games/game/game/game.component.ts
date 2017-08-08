import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'sq-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @ViewChild('countdown') countdownDialog;
  @ViewChild('endGame') endGameDialog;

  constructor() { }

  startCountdown(){
    this.countdownDialog.openCountdownDialog();
  }

  openEndGameDialog(){
    this.endGameDialog.openWinDialog();
  }
}
