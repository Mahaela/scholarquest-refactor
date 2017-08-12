import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

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
      this.isOpen = true;
        dialogRef.afterClosed().subscribe(result => {
          if(result == 'true') {
            this.isOpen = false;
            this.playAgainSelect.emit('true');
          }
        });
      }
    }
    openLoseDialog(coins, text) {
    if(!this.isOpen){
      this.config.hasBackdrop = false;
      let dialogRef = this.dialog.open(LoseDialogInnerTextComponent, {data: {coins: coins, text: text}});
      dialogRef.updateSize('350px');
      dialogRef.disableClose = true;
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
    // dialogRef._containerInstance.dialogConfig.disableClose = true;    
  }
}

@Component({
  selector: 'sq-lose-game-dialog-inner-text',
  templateUrl: './lose-game-dialog-inner-text.html',
  styleUrls: ['./lose-game-dialog-inner-text.css']
})
export class LoseDialogInnerTextComponent {

  coins;
  constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<LoseDialogInnerTextComponent>) {
    this.coins = data.coins;
    // dialogRef._containerInstance.dialogConfig.disableClose = true;
  }
}