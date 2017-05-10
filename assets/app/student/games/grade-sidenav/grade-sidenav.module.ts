import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { GradeSidenavComponent } from './grade-sidenav.component';

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule,
	],
	declarations: [
		GradeSidenavComponent
	],
	exports: [
        GradeSidenavComponent
	]
})
export class GradeSidenavModule {}
