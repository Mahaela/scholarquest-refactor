import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { WinDialogComponent, WinDialogInnerTextComponent } from './win-dialog.component';

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		WinDialogComponent,
		WinDialogInnerTextComponent 
	],
	bootstrap: [WinDialogComponent, WinDialogInnerTextComponent],
	exports: [
        WinDialogComponent,
		WinDialogInnerTextComponent
	]
})
export class WinDialogModule {}
