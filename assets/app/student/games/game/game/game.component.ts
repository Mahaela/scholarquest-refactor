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
  @Output() playAgainEvent = new EventEmitter<boolean>();
  @Output() changeGradeLevelEvent = new EventEmitter<number>();
  
  constructor() { }

  startCountdown(){
    this.countdownDialog.openCountdownDialog();
  }

  openWinGameDialog(){
    this.endGameDialog.openWinDialog();
  }

  openLoseGameDialog(coins, text){
    this.endGameDialog.openLoseDialog(coins, text);
  }

  countdownDone(){
    this.countdownDoneEvent.emit(true);
  }

  playAgain(){
    this.playAgainEvent.emit(true);
  }

  changeGradeLevel(event){
    console.log(event);
    console.log('game.ts');
    this.changeGradeLevelEvent.emit(event);
  }
}
