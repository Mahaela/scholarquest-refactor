import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../../shared/utils/api.service';

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
  @Output() changeGradeLevelEvent = new EventEmitter<Array<{}>>();
  @Output() openSidenavEvent = new EventEmitter<boolean>();
  @Output() closeSidenavEvent = new EventEmitter<boolean>();
  
  
  constructor(private apiService: ApiService) {
      
   }

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
     this.apiService.post('student/getVocabulary', {grade: event}).subscribe(
        data =>  this.changeGradeLevelEvent.emit(data.vocab),
        error => { console.log(error) }
      )
  }

  openSidenav(){
    this.openSidenavEvent.emit(true);
  }

  closedSidenav(){
    this.closeSidenavEvent.emit(true);
  }

 getVocabulary(){
  return this.apiService.post('student/getVocabulary', {grade: 1})
  }
}
