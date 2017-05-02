import { Component, Output, EventEmitter, Input } from '@angular/core';

import { AvatarService } from '../avatar-service/avatar.service';

@Component({
    selector: 'sq-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
    })

        
export class AvatarComponent {

    private faceImg: string;
    private eyesImg: string;
    private noseImg: string;
    private lipsImg: string;

    @Input('edit') edit: boolean;

    // when a menu is selected, tell the parent component so that it can update the menu displayed
    @Output() menuClicked = new EventEmitter<string>();

    constructor(private avatarService: AvatarService){
        this.getFaceByIndex('0101');
        this.getEyesByIndex('0101');
        this.getNoseByIndex('01');
        this.getLipsByIndex('01');
    }

    /*
    * get the image that will be used for the face of the avatar
    */
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
}
