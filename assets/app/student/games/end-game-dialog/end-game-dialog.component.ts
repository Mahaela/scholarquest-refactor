import { Component, EventEmitter, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';

@Component({
  selector: 'sq-end-game-dialog',
  templateUrl: './end-game-dialog.component.html',
  styleUrls: ['./end-game-dialog.component.css']
})

export class EndGameDialogComponent {

  @Output() playAgainSelect: EventEmitter<any> = new EventEmitter();

  public isOpen = false;
  config = new MdDialogConfig;

  constructor(private dialog: MdDialog){
    this.config.disableClose = true;
  }

  openWinDialog() {
    if(!this.isOpen){
      let dialogRef = this.dialog.open(WinDialogInnerTextComponent, this.config);
      this.dialog
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
      let dialogRef = this.dialog.open(LoseDialogInnerTextComponent, this.config);
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

  constructor(public dialogRef: MdDialogRef<WinDialogInnerTextComponent>) {
    dialogRef._containerInstance.dialogConfig.disableClose = true;    
  }
}

@Component({
  selector: 'sq-lose-game-dialog-inner-text',
  templateUrl: './lose-game-dialog-inner-text.html',
})
export class LoseDialogInnerTextComponent {

  constructor(public dialogRef: MdDialogRef<LoseDialogInnerTextComponent>) {
    dialogRef._containerInstance.dialogConfig.disableClose = true;
  }
}