import { Component, EventEmitter, trigger, style, state, transition, animate, AfterViewInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';

@Component({
  selector: 'sq-countdown-outer-dialog',
  templateUrl: './end-game-dialog.component.html',
  styleUrls: ['./end-game-dialog.component.css']
})

export class CountdownOuterDialogComponent {


  config = new MdDialogConfig;

  constructor(private dialog: MdDialog){
    this.config.disableClose = true;
  }

  openCountdownDialog() {
      let dialogRef = this.dialog.open(CountdownInnerDialogComponent, this.config);
      }
    }

@Component({
  selector: 'sq-countdown-inner-dialog',
  templateUrl: './countdown-dialog.html',
  // animations: [
  //   trigger('fade', [
  //     state('void', style({ 'opacity': '100' })),
  //     state('normal', style({ 'opacity': '100' })),
  //     state('faded', style({ 'opacity': '0' })),
  //     transition('normal => faded', animate('2s ease-out')),
  //     transition('faded => normal', animate('.01s')),
  //   ])
  // ] 
})

export class CountdownInnerDialogComponent implements AfterViewInit {
  
  numbers = [ require('../../../../assets/games/countdown3.png'), require('../../../../assets/games/countdown2.png'), require('../../../../assets/games/countdown1.png') ]
  activeNumberIndex = 2;
  activeNumberImg = '';
  fadeState = 'normal';
  test = 0;

  constructor(public dialogRef: MdDialogRef<CountdownInnerDialogComponent>) {
    this.activeNumberImg = this.numbers[0];
    // dialogRef._containerInstance.dialogConfig.disableClose = true;    
  }

  
  ngAfterViewInit(){
    console.log('afrer view init');
    // this.activeNumberImg = this.numbers[0];
    // this.fadeState = 'faded';
  }

  doneWithFade(event){
    // console.log(this.fadeState);
    // if(this.test != 0) this.fadeState == 'faded' ? this.fadeState = 'normal' : this.fadeState = 'faded';
    // this.test ++;
    // console.log('done with fade');
  }
}
