import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { CorrectStylingDirective } from './correct-styling.directive';
import { VocabMatchReloadComponent } from './vocab-match-reload.component';
import { VocabMatchComponent } from './vocab-match.component';

const routes: Routes = [
	{ path: '', component: VocabMatchComponent },
	{ path: 'vocab-match', component: VocabMatchComponent }
];

@NgModule({
	imports: [
		//BrowserAnimationsModule,
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		CorrectStylingDirective,
		VocabMatchComponent,
		VocabMatchReloadComponent
	],
    providers: [ ],
})
export default class MathBingoModule {}
