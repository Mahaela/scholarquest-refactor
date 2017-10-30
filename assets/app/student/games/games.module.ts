import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';


const routes: Routes = [
	{ path: '', component: GamesListComponent },
	{ path: 'games', component: GamesListComponent },
	{ path: 'math-bingo', loadChildren: './math-bingo/math-bingo.module.ts' },
	{ path: 'vocab-match', loadChildren: './vocab-match/vocab-match.module.ts' },
	{ path: 'typing', loadChildren: './typing/typing.module' },
	{ path: 'math-clouds', loadChildren: './math-clouds/math-clouds.module' },
	{ path: 'pipes', loadChildren: './pipes/pipes.module' },	
	{ path: 'apple-drop', loadChildren: './apple-drop/apple-drop.module' },	
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
	]
})
export default class GamesModule {
	constructor(){

	}
}
