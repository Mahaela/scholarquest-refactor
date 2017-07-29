import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { MathBingoComponent } from './math-bingo.component';


const routes: Routes = [
	{ path: '', component: MathBingoComponent },
	{ path: 'math-bingo', component: MathBingoComponent }
];

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		MathBingoComponent
	]
})
export default class MathBingoModule {}
