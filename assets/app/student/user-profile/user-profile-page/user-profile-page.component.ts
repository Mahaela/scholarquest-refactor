import { Component } from '@angular/core';

import { CursorService } from '../cursor/cursor.service'
import { CursorFollowerService } from '../cursor-follower/cursor-follower.service'

@Component({
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.css'],
})
export class UserProfilePageComponent {
   
    constructor(private cursorService: CursorService, private cursorFollowerService: CursorFollowerService) {
    }
}
