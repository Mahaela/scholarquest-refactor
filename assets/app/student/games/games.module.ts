import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { VocabularyService } from './vocabulary/vocabulary.service';
import { MathProblemsService } from './math-problems/math-problems.service'


const routes: Routes = [
	{ path: '', component: GamesListComponent },
	{ path: 'games', component: GamesListComponent },
	{ path: 'math-bingo', loadChildren: './math-bingo/math-bingo.module.ts' },
	{ path: 'vocab-match', loadChildren: './vocab-match/vocab-match.module.ts' },
	{ path: 'typing', loadChildren: './typing/typing.module' },
	{ path: 'math-clouds', loadChildren: './math-clouds/math-clouds.module' },
	{ path: 'word-pipes', loadChildren: './word-pipes/word-pipes.module' }	
];

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		GamesListComponent
	],
	providers: [ VocabularyService, MathProblemsService ]

})
export default class GamesModule {}
