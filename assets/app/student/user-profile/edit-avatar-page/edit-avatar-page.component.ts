import { Component } from '@angular/core';

import { EditAvatarService } from './edit-avatar.service';

@Component({
  templateUrl: './edit-avatar-page.component.html',
  styleUrls: ['./edit-avatar-page.component.css']
})
export class EditAvatarPageComponent {

  constructor(private editAvatarService: EditAvatarService){
  }
}
