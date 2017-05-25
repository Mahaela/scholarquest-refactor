import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { MathBingoComponent } from './math-bingo.component';
import { MathBingoEquationsSecondService } from './equations/math-bingo-equations-second.service';
import { GradeSidenavModule } from '../grade-sidenav/grade-sidenav.module';
import { WinDialogModule } from '../win-dialog/win-dialog.module';

const routes: Routes = [
	{ path: '', component: MathBingoComponent },
	{ path: 'math-bingo', component: MathBingoComponent }
];

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule,
		GradeSidenavModule,
		RouterModule.forChild(routes),
		WinDialogModule
	],
	declarations: [
		MathBingoComponent
	],
    providers: [ MathBingoEquationsSecondService ],
})
export default class MathBingoModule {}
