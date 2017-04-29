import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ButtonComponent } from './button/button.component';
import { ButtonGridCardComponent } from './button-grid-card/button-grid-card.component';
import { ApiService } from '../utils/api.service';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
	],
	declarations: [
        ButtonComponent,
        ButtonGridCardComponent
	],
    exports: [
		ButtonComponent,
        ButtonGridCardComponent
	],
    providers: [ ApiService ]
})
export class CardModule { }
