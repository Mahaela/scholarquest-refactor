import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdButtonModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import 'hammerjs';

import { AppComponent } from "./app.component";
import { CardModule } from "./shared/card/card.module"
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './shared/utils/api.service';
import { ArrayService } from './shared/utils/array.service';
import { CookieService } from './shared/utils/cookie.service';
import { CursorFollowerListComponent } from './cursor-follower/cursor-follower-list/cursor-follower-list.component';
import { EyesComponent } from './cursor-follower/eyes/eyes.component';
import { CursorFollowerService } from './cursor-follower/cursor-follower.service';
import { CursorDisplayComponent } from './cursor/cursor-display/cursor-display.component';
import { CursorService } from './cursor/cursor.service';
import { CursorComponent } from './cursor/cursor.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        CursorFollowerListComponent,
        EyesComponent,
        CursorDisplayComponent,
        CursorComponent
    ],  
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        MdButtonModule,
        RouterModule.forRoot([ 
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'games', loadChildren: './student/games/games.module.ts' },
            { path: 'profile', loadChildren: './student/user-profile/user-profile.module' },
            { path: 'auth', loadChildren: './auth/auth.module.ts' }
        ])

    ],
    providers: [ApiService, ArrayService, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {}