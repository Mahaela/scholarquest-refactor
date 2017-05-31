import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { TypingComponent } from './typing.component';
import { GradeSidenavModule } from '../grade-sidenav/grade-sidenav.module';
import { EndGameDialogModule } from '../end-game-dialog/end-game-dialog.module';

const routes: Routes = [
	{ path: '', component: TypingComponent },
	{ path: 'typing', component: TypingComponent }
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
		TypingComponent
	]
})
export default class TypingModule {}
