import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdButtonModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import 'hammerjs';

import { AppComponent } from "./app.component";
//import { CardModule } from "./shared/card/card.module"
import { AuthService } from "./auth/auth.service";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamesComponent } from './student/games/games.component';
import { MathBingoComponent } from './student/games/math-bingo/math-bingo.component';
import { HighlightMathBingoDirective } from './student/games/math-bingo/highlight-math-bingo.directive';
import { GamesListComponent } from './student/games/games-list/games-list.component';
import { VocabMatchComponent } from './student/games/vocab-match/vocab-match.component';
import { CorrectStylingDirective } from './student/games/vocab-match/correct-styling.directive';
import { VocabMatchReloadComponent } from './student/games/vocab-match/vocab-match-reload.component';
import { StudentService } from './student/student.service';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignupService } from './auth/signup/signup.service';
import { LoginService } from './auth/login/login.service';
import { CapacitySignupComponent } from './auth/signup/capacity-signup/capacity-signup.component';
import { CredentialsSignupComponent } from './auth/signup/credentials-signup/credentials-signup.component';
import { EmailConfirmationComponent } from './auth/signup/email-confirmation/email-confirmation.component';
import { ApiService } from './shared/utils/api.service'


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        GamesComponent,
        GamesListComponent,
        MathBingoComponent,
        HighlightMathBingoDirective,
        VocabMatchComponent,
        CorrectStylingDirective,
        VocabMatchReloadComponent,
        LoginComponent,
        SignupComponent,
        CapacitySignupComponent,
        CredentialsSignupComponent,
        EmailConfirmationComponent,
    ],  
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        MdButtonModule,
        //CardModule,
        RouterModule.forRoot([ 
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'games', component: GamesComponent },
            //{ path: 'games', component: GamesComponent, children: GAMES_ROUTES },
            { path: 'profile', loadChildren: './student/user-profile/user-profile.module' },
            { path: 'signup', component: CapacitySignupComponent },
            //{ path: 'signup', component: SignupComponent, children: SIGNUP_ROUTES },
            { path: 'login', component: LoginComponent }, ])

    ],
    providers: [AuthService, StudentService, SignupService, LoginService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {

}