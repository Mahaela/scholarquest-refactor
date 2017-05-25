import { Component, EventEmitter, Output } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'sq-win-dialog',
  templateUrl: './win-dialog.component.html',
  styleUrls: ['./win-dialog.component.css']
})

export class WinDialogComponent {

  @Output() playAgainSelect: EventEmitter<any> = new EventEmitter();

  constructor(private dialog: MdDialog){}

  openDialog() {
   let dialogRef = this.dialog.open(WinDialogInnerTextComponent);
     dialogRef.afterClosed().subscribe(result => {
      if(result == 'true'){
        this.playAgainSelect.emit('true');
      }
    });
  }
}

@Component({
  selector: 'sq-win-dialog-inner-text',
  templateUrl: './win-dialog-inner-text.html',
})
export class WinDialogInnerTextComponent {

  constructor(public dialogRef: MdDialogRef<WinDialogInnerTextComponent>) {}
}

