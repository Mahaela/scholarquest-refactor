import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { VocabMatchComponent } from './vocab-match.component';
import { VocabularyService } from './vocabulary/vocabulary.service';

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
		VocabMatchComponent,
	],
    providers: [ VocabularyService ],
})
export default class MathBingoModule {}
