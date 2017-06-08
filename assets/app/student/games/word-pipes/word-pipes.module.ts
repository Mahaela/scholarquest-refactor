import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WordPipesComponent } from './word-pipes.component';
import { GradeSidenavModule } from '../grade-sidenav/grade-sidenav.module';
import { EndGameDialogModule } from '../end-game-dialog/end-game-dialog.module';

const routes: Routes = [
	{ path: '', component: WordPipesComponent },
	{ path: 'word-pipes', component: WordPipesComponent }
];

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
		GradeSidenavModule,
		EndGameDialogModule
	],
	declarations: [
		WordPipesComponent
	]
})
export default class WordPipesCloudsModule {}