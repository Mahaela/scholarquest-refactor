import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { WelcomeEmailSentComponent } from './welcome-email-sent/welcome-email-sent.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EmailVerifiedComponent } from './email-verified/email-verified.component';


const routes: Routes = [
	{ path: '', component: SignupComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'welcome', component: WelcomeEmailSentComponent },
	{ path: 'verified/:id', component: EmailVerifiedComponent }
];

@NgModule({
	imports: [
		MaterialModule,
		CommonModule,
		FlexLayoutModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		SignupComponent,
		LoginComponent,
		WelcomeEmailSentComponent,
		EmailVerifiedComponent
	]
})
export default class AuthModule {}
