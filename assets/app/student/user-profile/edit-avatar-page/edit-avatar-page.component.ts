import { Component, ViewChild } from '@angular/core';

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

  private menuDisplayed = 'face';

  @ViewChild('avatar') avatar: AvatarComponent;
  @ViewChild('faceCard') faceCard: ButtonGridCardComponent;
  @ViewChild('eyesCard') eyesCard: ButtonGridCardComponent;

  constructor(private avatarService: AvatarService, private apiService: ApiService){
    this.faceOptions = avatarService.getFacesColor1();
    this.eyesOptions = avatarService.getEyesColor1();

    this.apiService.post('avatar/getAvatar',{})
      .subscribe(
      data => {},
      error => {}
      )}

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
