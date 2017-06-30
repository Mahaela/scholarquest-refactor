import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', component: SignupComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		SignupComponent,
		LoginComponent
	]
})
export default class AuthModule {}
