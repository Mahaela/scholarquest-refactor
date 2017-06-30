import { Component, Output, EventEmitter, Input } from '@angular/core';

import { AvatarService } from '../avatar-service/avatar.service';

import { ApiService } from '../../../shared/utils/api.service';

@Component({
    selector: 'sq-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
    })

        
export class AvatarComponent {

    private hairImg: string;
    private faceImg: string;
    private eyesImg: string;
    private noseImg: string;
    private lipsImg: string;
    private neckImg: string;
    private shirtImg: string;
    private armImg: string;
    private pantsImg: string;
    private shoesImg: string;

    // when a menu is selected, tell the parent component so that it can update the menu displayed
    @Output() menuClicked = new EventEmitter<string>();

    constructor(private avatarService: AvatarService, private apiService: ApiService) {
        
    this.apiService.post('avatar/getAvatar',{})
      .subscribe(
      avatar => {
          
        this.getHairByIndex(avatar.obj.hair);
        this.getFaceByIndex(avatar.obj.face);
        this.getEyesByIndex(avatar.obj.eyes);
        this.getNoseByIndex(avatar.obj.nose);
        this.getLipsByIndex(avatar.obj.mouth);
        this.getNeckByIndex(avatar.obj.face);
        this.getShirtByIndex(avatar.obj.shirt);
        this.getArmByIndex(avatar.obj.face);
        this.getPantsByIndex(avatar.obj.pants);
        this.getShoesByIndex(avatar.obj.shoes);
          
      },
      error => console.log(error)
      )
    }

    /*
    * get the image that will be used for the face of the avatar
    */
    getHairByIndex(index: string){
        this.hairImg = this.avatarService.getHairByIndex(index);
    }
    getFaceByIndex(index: string){
        this.faceImg = this.avatarService.getFaceByIndex(index);
    }
    getEyesByIndex(index: string){
        this.eyesImg = this.avatarService.getEyesByIndex(index);
    }
    getNoseByIndex(index: string){
        this.noseImg = this.avatarService.getNoseByIndex(index);
    }
    getLipsByIndex(index: string){
        this.lipsImg = this.avatarService.getLipsByIndex(index);
    }
    getNeckByIndex(index: string){
        this.neckImg = this.avatarService.getNeckByIndex(index.substring(0, 2))
    }
    getShirtByIndex(index: string){
        this.shirtImg = this.avatarService.getShirtByIndex(index);
    }
    getArmByIndex(index: string) {
        this.armImg = this.avatarService.getArmsByIndex(index); 
    }
    getPantsByIndex(index: string) {
        this.pantsImg = this.avatarService.getPantsByIndex(index);
    }
    getShoesByIndex(index: string) {
        this.shoesImg = this.avatarService.getShoesByIndex(index);
    }

}
