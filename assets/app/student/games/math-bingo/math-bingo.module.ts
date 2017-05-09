import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { MathBingoComponent } from './math-bingo.component';
import { HighlightMathBingoDirective } from './highlight-math-bingo.directive';
import { MathBingoEquationsSecondService } from './equations/math-bingo-equations-second.service';

const routes: Routes = [
	{ path: '', component: MathBingoComponent },
	{ path: 'math-bingo', component: MathBingoComponent }
];

@NgModule({
	imports: [
		//BrowserAnimationsModule,
		CommonModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		MathBingoComponent,
		HighlightMathBingoDirective
	],
    providers: [ MathBingoEquationsSecondService ],
})
export default class MathBingoModule {}
