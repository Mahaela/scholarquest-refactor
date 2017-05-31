import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { EndGameDialogComponent, WinDialogInnerTextComponent, LoseDialogInnerTextComponent } from './end-game-dialog.component';

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		EndGameDialogComponent,
		WinDialogInnerTextComponent,
		LoseDialogInnerTextComponent 
	],
	bootstrap: [EndGameDialogComponent, WinDialogInnerTextComponent, LoseDialogInnerTextComponent],
	exports: [
        EndGameDialogComponent,
		WinDialogInnerTextComponent,
		LoseDialogInnerTextComponent
	]
})
export class EndGameDialogModule {}
