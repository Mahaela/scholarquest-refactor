import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sq-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @ViewChild('countdown') countdownDialog;
  @ViewChild('endGame') endGameDialog;
  @Output() countdownDoneEvent = new EventEmitter<boolean>();
  constructor() { }

  startCountdown(){
    this.countdownDialog.openCountdownDialog();
  }

  openEndGameDialog(){
    this.endGameDialog.openWinDialog();
  }

  countdownDone(){
    this.countdownDoneEvent.emit(true);
  }
}
