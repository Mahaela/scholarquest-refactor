import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { TypingComponent } from './typing.component';

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
	],
	declarations: [
		TypingComponent
	]
})
export default class TypingModule {}
