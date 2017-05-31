import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { MathCloudsComponent } from './math-clouds.component';
import { GradeSidenavModule } from '../grade-sidenav/grade-sidenav.module';
import { EndGameDialogModule } from '../end-game-dialog/end-game-dialog.module';

const routes: Routes = [
	{ path: '', component: MathCloudsComponent },
	{ path: 'math-clouds', component: MathCloudsComponent }
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
		MathCloudsComponent
	]
})
export default class MathCloudsModule {}
