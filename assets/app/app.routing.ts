import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UserProfilePageComponent } from './student/user-profile/user-profile-page/user-profile-page.component'
import { GamesComponent } from './student/games/games.component';
import { GAMES_ROUTES } from './student/games/games.routes';
import { LoginComponent } from './auth/login/login.component';
import { CapacitySignupComponent } from './auth/signup/capacity-signup/capacity-signup.component';
import { SIGNUP_ROUTES } from './auth/signup/signup.routes';
import { SignupComponent } from './auth/signup/signup.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'games', component: GamesComponent },
    { path: 'games', component: GamesComponent, children: GAMES_ROUTES },
    { path: 'profile', component: UserProfilePageComponent },
    { path: 'signup', component: CapacitySignupComponent },
    { path: 'signup', component: SignupComponent, children: SIGNUP_ROUTES },
    { path: 'login', component: LoginComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);