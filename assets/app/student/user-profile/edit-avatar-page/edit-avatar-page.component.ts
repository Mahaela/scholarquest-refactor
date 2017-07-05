import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { AvatarService } from '../avatar-service/avatar.service';
import { AvatarComponent } from '../avatar/avatar.component';
import { ButtonGridCardComponent } from '../../../shared/card/button-grid-card/button-grid-card.component';

import { ApiService } from '../../../shared/utils/api.service';

@Component({
  templateUrl: './edit-avatar-page.component.html',
  styleUrls: ['./edit-avatar-page.component.css']
})
export class EditAvatarPageComponent {

  private faceOptions: any;
  private eyesOptions: any;
  private avatarData = {};

  private menuDisplayed = 'face';

  @ViewChild('avatar') avatar: AvatarComponent;

  constructor(private avatarService: AvatarService, private apiService: ApiService){

    this.apiService.post('avatar/getAvatar',{})
      .subscribe(
        data => {
          this.avatarData = data.obj;
          this.faceOptions = this.avatarService.getFacesByColor(data.obj.face);
          this.eyesOptions = this.avatarService.getEyesByColor(data.obj.eyes);
          this.avatarData.faceColor = data.obj.face.substring(0,2);
          this.avatarData.eyeColor = data.obj.eyes.substring(0,2);
      },
      error => {console.log(error)}
    )
  }

  /*
   * change the faces that are displayed when a new face color is chosen
   */
  changeFaceList(event){
    this.faceOptions = this.avatarService.getFacesByColor(event);
  }

  /*
   * change the eyes that are displayed when a new eye color is chosen
   */
  changeEyesList(event){
      this.eyesOptions = this.avatarService.getEyesByColor(event);
  }

 /*
  * change the displayed face when a face is selected
  */
  changeFace(event){
    this.avatar.getFaceByIndex(event);
    this.avatar.getNeckByIndex(event);
    this.avatar.getArmByIndex(event);

    this.updateDatabase({'face': event});
  }
 
 /*
  * change the displayed eyes when eyes are selected
  */
  changeEyes(event){
    this.avatar.getEyesByIndex(event);
    this.updateDatabase({'eyes': event});
  }

 /*
  * change the displayed nose when a nose is selected
  */
  changeNose(event){
    this.avatar.getNoseByIndex(event);
    this.updateDatabase({'nose': event});
  }
 
 /*
  * change the displayed lips when lips are is selected
  */
  changeLips(event){
    this.avatar.getLipsByIndex(event);
    this.updateDatabase({'mouth': event});
  }

  changeMenu(event){
    this.menuDisplayed = event;
  }

  changeHair(event){
    this.avatar.getHairByIndex(event);
    this.updateDatabase({'hair': event});
  }
  

  changePants(event){
    this.avatar.getPantsByIndex(event);
     this.updateDatabase({'pants': event});
  }

  changeShirt(event){
    this.avatar.getShirtByIndex(event);
    this.updateDatabase({'shirt': event});
  }


  updateDatabase(params: any){
   this.apiService.patch('avatar/patchAvatar', params)
      .subscribe(
        data =>  {},
        error => {}
      )
  }

}
