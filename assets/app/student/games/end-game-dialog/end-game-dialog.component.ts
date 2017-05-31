import { Component, EventEmitter, Output } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'sq-end-game-dialog',
  templateUrl: './end-game-dialog.component.html',
  styleUrls: ['./end-game-dialog.component.css']
})

export class EndGameDialogComponent {

  @Output() playAgainSelect: EventEmitter<any> = new EventEmitter();

  public isOpen = false;

  constructor(private dialog: MdDialog){}

  openWinDialog() {
    if(!this.isOpen){
      let dialogRef = this.dialog.open(WinDialogInnerTextComponent);
      this.isOpen = true;
        dialogRef.afterClosed().subscribe(result => {
          if(result == 'true') {
            this.isOpen = false;
            this.playAgainSelect.emit('true');
          }
        });
      }
    }
    openLoseDialog() {
    if(!this.isOpen){
      let dialogRef = this.dialog.open(LoseDialogInnerTextComponent);
      this.isOpen = true;
        dialogRef.afterClosed().subscribe(result => {
          if(result == 'true') {
            this.isOpen = false;
            this.playAgainSelect.emit('true');
          }
        });
      }
    }
  } 

@Component({
  selector: 'sq-win-dialog-inner-text',
  templateUrl: './win-dialog-inner-text.html',
})
export class WinDialogInnerTextComponent {

  constructor(public dialogRef: MdDialogRef<WinDialogInnerTextComponent>) {}
}

@Component({
  selector: 'sq-lose-game-dialog-inner-text',
  templateUrl: './lose-game-dialog-inner-text.html',
})
export class LoseDialogInnerTextComponent {

  constructor(public dialogRef: MdDialogRef<LoseDialogInnerTextComponent>) {}
}