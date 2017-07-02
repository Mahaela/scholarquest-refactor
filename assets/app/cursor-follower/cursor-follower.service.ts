import { Component, Injectable } from '@angular/core';
import { EyesComponent } from './eyes/eyes.component';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class CursorFollowerService {
    private cursorFollower0: { img: string, index: number } = { img: require('../assets/clip-art/None.png'), index: 0 };
    private cursorFollower1: { img: string, index: number } = { img: require('../assets/cursor-followers/EyesFollower.jpg'), index: 1 };
   
    private cursorFollowers: { img: string, index: number }[] = [];
    public selectedCursorFollower = new BehaviorSubject(0);

    constructor() {
        //add the cursor followers to an array        
        this.cursorFollowers.push(this.cursorFollower0);
        this.cursorFollowers.push(this.cursorFollower1);
    }

    /*
     * return the cursor Followers
     */
    getCursorFollowers(): { img: string, index: number }[] {
        return this.cursorFollowers;
    }
}
