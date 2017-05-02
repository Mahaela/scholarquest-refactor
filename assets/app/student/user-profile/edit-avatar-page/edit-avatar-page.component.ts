import { Component, ViewChild } from '@angular/core';

import { AvatarService } from '../avatar-service/avatar.service';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  templateUrl: './edit-avatar-page.component.html',
  styleUrls: ['./edit-avatar-page.component.css']
})
export class EditAvatarPageComponent {

  private faceOptions: any;
  private eyesOptions: any;

  private menuDisplayed = 'face';

  @ViewChild('avatar') avatar: AvatarComponent;

  constructor(private avatarService: AvatarService){
    this.faceOptions = avatarService.getFacesColor1();
    this.eyesOptions = avatarService.getEyesColor1();
  }

  /*
   * change the faces that are displayed when a new face color is chosen
   */
  changeFaceList(event){
    switch(event){
      case '01':{
        this.faceOptions = this.avatarService.getFacesColor1();
        break;
      }
      case '02':{
        this.faceOptions = this.avatarService.getFacesColor2();
        break;
      }
      case '03':{
        this.faceOptions = this.avatarService.getFacesColor3();
        break;
      }
      case '04':{
        this.faceOptions = this.avatarService.getFacesColor4();
        break;
      }
      case '05':{
        this.faceOptions = this.avatarService.getFacesColor5();
        break;
      }
      case '06':{
        this.faceOptions = this.avatarService.getFacesColor6();
        break;
      }
    }
  }

  /*
   * change the eyes that are displayed when a new eye color is chosen
   */
  changeEyesList(event){
    switch(event){
      case '01':{
        this.eyesOptions = this.avatarService.getEyesColor1();
        break;
      }
      case '02':{
        this.eyesOptions = this.avatarService.getEyesColor2();
        break;
      }
      case '03':{
        this.eyesOptions = this.avatarService.getEyesColor3();
        break;
      }
      case '04':{
        this.eyesOptions = this.avatarService.getEyesColor4();
        break;
      }
      case '05':{
        this.eyesOptions = this.avatarService.getEyesColor5();
        break;
      }
      case '06':{
        this.eyesOptions = this.avatarService.getEyesColor6();
        break;
      }
    }
  }

 /*
  * change the displayed face when a face is selected
  */
  changeFace(event){
    this.avatar.getFaceByIndex(event);
  }
 
 /*
  * change the displayed eyes when eyes are selected
  */
  changeEyes(event){
    this.avatar.getEyesByIndex(event);
  }

 /*
  * change the displayed nose when a nose is selected
  */
  changeNose(event){
    this.avatar.getNoseByIndex(event);
  }
 
 /*
  * change the displayed lips when lips are is selected
  */
  changeLips(event){
    this.avatar.getLipsByIndex(event);
  }

  changeMenu(event){
    this.menuDisplayed = event;
  }
}
