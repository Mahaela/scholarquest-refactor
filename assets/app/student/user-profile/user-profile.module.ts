import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AvatarComponent } from './avatar/avatar.component';
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
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		CardModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		UserProfilePageComponent,
        AvatarComponent,
		EditAvatarPageComponent,
	],
    providers: [  AvatarService ]
})
export default class UserProfileModule {}
