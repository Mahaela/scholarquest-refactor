import { Component, trigger, style, state, transition, animate } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
    selector: 'sq-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css'],
    animations: [
        trigger('visibility', [
            state('hidden', style({ 'opacity': 0 })),
            state('visible', style({ 'opacity': 1 })),
            transition('hidden <=> visible', animate(300))])
        ]})

        
export class AvatarComponent  {
    private firstAvatarImg: string;
    private secondAvatarImg: string;
    private arrowState = 'hidden';
    private firstAvatarState = 'visible';
    private secondAvatarState = 'hidden';
    private avatarImg0 = require('../../../assets/avatars/DarkWizard.jpg');
    private avatarImg1 = require('../../../assets/avatars/Mogul.jpg');
    private avatarImg2 = require('../../../assets/avatars/SailorMoon.jpg');
    private avatarImg3 = require('../../../assets/avatars/TuxedoMask.jpg');
    private avatarImgs = [this.avatarImg0, this.avatarImg1, this.avatarImg2, this.avatarImg3];
    

    constructor(private studentService: StudentService) {
        this.firstAvatarImg = this.avatarImgs[studentService.getAvatar()];
        console.log(this.firstAvatarImg);
        this.secondAvatarImg = this.avatarImgs[0];
    }

    arrows() {
        this.arrowState == 'hidden' ? this.arrowState = 'visible' : this.arrowState = 'hidden';
    }


    avatarScrollUp(oldAvatar: HTMLElement, avatar: HTMLElement) {
        if (this.firstAvatarState == 'visible') {
            if (this.avatarImgs.indexOf(this.firstAvatarImg) == this.avatarImgs.length - 1) {
                this.secondAvatarImg = this.avatarImgs[0];
            }
            else {
                this.secondAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.firstAvatarImg) + 1];
            }
            this.firstAvatarState = 'hidden';
            this.secondAvatarState = 'visible';
            this.studentService.setAvatar(this.avatarImgs.indexOf(this.secondAvatarImg)).subscribe(data => console.log(data));
        }
        else {
            if (this.avatarImgs.indexOf(this.secondAvatarImg) == this.avatarImgs.length - 1) {
                this.firstAvatarImg = this.avatarImgs[0];
            }
            else {
                this.firstAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.secondAvatarImg) + 1];
                }
            this.firstAvatarState = 'visible';
            this.secondAvatarState = 'hidden';
            this.studentService.setAvatar(this.avatarImgs.indexOf(this.firstAvatarImg));
        }
    }

    avatarScrollDown() {
        if (this.firstAvatarState == 'visible') {
            if (this.avatarImgs.indexOf(this.firstAvatarImg) == 0) {
                this.secondAvatarImg = this.avatarImgs[this.avatarImgs.length -1];
            }
            else {
                this.secondAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.firstAvatarImg) - 1];
            }
            this.firstAvatarState = 'hidden';
            this.secondAvatarState = 'visible';
        }
        else {
            if (this.avatarImgs.indexOf(this.secondAvatarImg) == 0) {
                this.firstAvatarImg = this.avatarImgs[this.avatarImgs.length - 1];
            }
            else {
                this.firstAvatarImg = this.avatarImgs[this.avatarImgs.indexOf(this.secondAvatarImg) - 1];
            }
            this.firstAvatarState = 'visible';
            this.secondAvatarState = 'hidden';
        }
    }
}
