import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { VocabMatchComponent } from './vocab-match.component';

const routes: Routes = [
	{ path: '', component: VocabMatchComponent },
	{ path: 'vocab-match', component: VocabMatchComponent }
];

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		VocabMatchComponent,
	]
})
export default class MathBingoModule {}
