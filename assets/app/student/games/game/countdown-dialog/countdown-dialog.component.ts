import { Component, EventEmitter, AfterViewInit, Output, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { Router, NavigationStart }   from '@angular/router';

@Component({
  selector: 'sq-countdown-outer-dialog',
  templateUrl: './countdown.component.html',
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
})

export class CountdownInnerDialogComponent implements AfterViewInit {
  
  numbers = [ 
    require('../../../../assets/games/countdown/countdown10.png'),
    require('../../../../assets/games/countdown/countdown15.png'), 
    require('../../../../assets/games/countdown/countdown110.png'), 
    require('../../../../assets/games/countdown/countdown115.png'), 
    require('../../../../assets/games/countdown/countdown120.png'), 
    require('../../../../assets/games/countdown/countdown125.png'), 
    require('../../../../assets/games/countdown/countdown130.png'), 
    require('../../../../assets/games/countdown/countdown135.png'), 
    require('../../../../assets/games/countdown/countdown140.png'), 
    require('../../../../assets/games/countdown/countdown145.png'), 
    require('../../../../assets/games/countdown/countdown150.png'), 
    require('../../../../assets/games/countdown/countdown155.png'), 
    require('../../../../assets/games/countdown/countdown160.png'), 
    require('../../../../assets/games/countdown/countdown165.png'), 
    require('../../../../assets/games/countdown/countdown170.png'), 
    require('../../../../assets/games/countdown/countdown175.png'), 
    require('../../../../assets/games/countdown/countdown180.png'), 
    require('../../../../assets/games/countdown/countdown185.png'), 
    require('../../../../assets/games/countdown/countdown190.png'), 
    require('../../../../assets/games/countdown/countdown195.png'), 
    require('../../../../assets/games/countdown/countdown1100.png'),
    require('../../../../assets/games/countdown/countdown20.png'),
    require('../../../../assets/games/countdown/countdown25.png'), 
    require('../../../../assets/games/countdown/countdown210.png'), 
    require('../../../../assets/games/countdown/countdown215.png'), 
    require('../../../../assets/games/countdown/countdown220.png'), 
    require('../../../../assets/games/countdown/countdown225.png'), 
    require('../../../../assets/games/countdown/countdown230.png'), 
    require('../../../../assets/games/countdown/countdown235.png'), 
    require('../../../../assets/games/countdown/countdown240.png'), 
    require('../../../../assets/games/countdown/countdown245.png'), 
    require('../../../../assets/games/countdown/countdown250.png'), 
    require('../../../../assets/games/countdown/countdown255.png'), 
    require('../../../../assets/games/countdown/countdown260.png'), 
    require('../../../../assets/games/countdown/countdown265.png'), 
    require('../../../../assets/games/countdown/countdown270.png'), 
    require('../../../../assets/games/countdown/countdown275.png'), 
    require('../../../../assets/games/countdown/countdown280.png'), 
    require('../../../../assets/games/countdown/countdown285.png'), 
    require('../../../../assets/games/countdown/countdown290.png'), 
    require('../../../../assets/games/countdown/countdown295.png'), 
    require('../../../../assets/games/countdown/countdown2100.png'),
    require('../../../../assets/games/countdown/countdown30.png'),
    require('../../../../assets/games/countdown/countdown35.png'), 
    require('../../../../assets/games/countdown/countdown310.png'), 
    require('../../../../assets/games/countdown/countdown315.png'), 
    require('../../../../assets/games/countdown/countdown320.png'), 
    require('../../../../assets/games/countdown/countdown325.png'), 
    require('../../../../assets/games/countdown/countdown330.png'), 
    require('../../../../assets/games/countdown/countdown335.png'), 
    require('../../../../assets/games/countdown/countdown340.png'), 
    require('../../../../assets/games/countdown/countdown345.png'), 
    require('../../../../assets/games/countdown/countdown350.png'), 
    require('../../../../assets/games/countdown/countdown355.png'), 
    require('../../../../assets/games/countdown/countdown360.png'), 
    require('../../../../assets/games/countdown/countdown365.png'), 
    require('../../../../assets/games/countdown/countdown370.png'), 
    require('../../../../assets/games/countdown/countdown375.png'), 
    require('../../../../assets/games/countdown/countdown380.png'), 
    require('../../../../assets/games/countdown/countdown385.png'), 
    require('../../../../assets/games/countdown/countdown390.png'), 
    require('../../../../assets/games/countdown/countdown395.png'), 
    require('../../../../assets/games/countdown/countdown3100.png')    
    ]

    activeNumberIndex = this.numbers.length -1;
    countdown;

  constructor(public dialogRef: MdDialogRef<CountdownInnerDialogComponent>, private router: Router) {
    router.events.forEach((event) => {
     if(event instanceof NavigationStart) {
        clearInterval(this.countdown);
      }
    });
  }

  
  ngAfterViewInit(){
    this.countdown = setInterval(function(){
      this.activeNumberIndex--;
      if(this.activeNumberIndex < 0){
        clearInterval(this.countdown);
        this.dialogRef.close();
      }
    }.bind(this), 50)
  }
}
