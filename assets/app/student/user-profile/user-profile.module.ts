import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AvatarComponent } from './avatar/avatar.component';
// import { CursorFollowerListComponent } from './cursor-follower/cursor-follower-list/cursor-follower-list.component';
// import { EyesComponent } from './cursor-follower/eyes/eyes.component';
// import { CursorFollowerService } from './cursor-follower/cursor-follower.service';
// import { CursorDisplayComponent } from './cursor/cursor-display/cursor-display.component';
// import { CursorService } from './cursor/cursor.service';
// import { CursorComponent } from './cursor/cursor.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { EditAvatarPageComponent } from './edit-avatar-page/edit-avatar-page.component';
import { CardModule } from '../../shared/card/card.module';
import { AvatarService } from './avatar-service/avatar.service';

const routes: Routes = [
	{ path: '', component: UserProfilePageComponent },
	{ path: 'profile', component: UserProfilePageComponent },
	{ path: 'edit-avatar', component: EditAvatarPageComponent },
];

@NgModule({
	imports: [
		//BrowserAnimationsModule,
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		CardModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		UserProfilePageComponent,
        AvatarComponent,
        // CursorFollowerListComponent,
        // EyesComponent,
        // CursorDisplayComponent,
        // CursorComponent,
		EditAvatarPageComponent,
	],
    providers: [  AvatarService ],
	// CursorFollowerService, CursorService,
})
export default class UserProfileModule {}
