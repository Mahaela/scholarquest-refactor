import { Component, EventEmitter, trigger, style, state, transition, animate, AfterViewInit, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';

@Component({
  selector: 'sq-countdown-outer-dialog',
  templateUrl: './countdown.component.html',
  // styleUrls: ['./end-game-dialog.component.css']
})

export class CountdownOuterDialogComponent {
  @Output() countdownDone = new EventEmitter<boolean>();
  config = new MdDialogConfig;

  constructor(private dialog: MdDialog){
    this.config.disableClose = true;
  }

  openCountdownDialog() {
      let dialogRef = this.dialog.open(CountdownInnerDialogComponent, this.config);
       dialogRef.afterClosed().subscribe(result => {
        this.countdownDone.emit(true);
        });
      }
    }

@Component({
  selector: 'sq-countdown-inner-dialog',
  templateUrl: './countdown-dialog.html',
  animations: [
    trigger('fade', [
      state('normal', style({ 'opacity': '100' })),
      state('faded', style({ 'opacity': '0' })),
      transition('normal => faded', animate('2s ease-out')),
      transition('faded => normal', animate('.01s')),
    ])
  ] 
})

export class CountdownInnerDialogComponent implements AfterViewInit {
  
  numbers = [ require('../../../../assets/games/countdown3.png'), require('../../../../assets/games/countdown2.png'), require('../../../../assets/games/countdown1.png') ]
  activeNumberIndex = 0;
  activeNumberImg = '';
  fadeState = 'normal';
  test = 0;

  constructor(public dialogRef: MdDialogRef<CountdownInnerDialogComponent>) {
    this.activeNumberImg = this.numbers[0];
  }

  
  ngAfterViewInit(){
    this.activeNumberImg = this.numbers[0];
    // this.fadeState = 'faded';
  }

  doneWithFade(event){
    if(this.fadeState == 'faded'){
      this.activeNumberIndex++;
      if(this.activeNumberIndex > 2){
        this.dialogRef.close();
        return;
      }
      this.activeNumberImg = this.numbers[this.activeNumberIndex];
    }
    this.fadeState == 'faded' ? this.fadeState = 'normal' : this.fadeState = 'faded';
  }
}
