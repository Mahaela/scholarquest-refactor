import { Component} from '@angular/core';

import { CursorService } from '../../../cursor/cursor.service';
import { CursorFollowerService } from '../../../cursor-follower/cursor-follower.service';
import { ApiService } from '../../../shared/utils/api.service';


@Component({
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.css'],
})
export class UserProfilePageComponent {
    studentData = {cursor: 1, cursorFollower: 1};


    ngAfterViewInit(){
        this.apiService.post('student/getStudent', {}).subscribe(
            data =>{
                this.studentData = data
            },
            error =>{
                console.log('error getting student');
                this.studentData.cursor = 1;
                this.studentData.cursorFollower = 1;
            } 
        )
    }   
    constructor(private cursorService: CursorService, private cursorFollowerService: CursorFollowerService, private apiService: ApiService) {
    }

    changeCursor(event){
        this.apiService.patch('student/patchStudent', {'cursor': event}).subscribe(
            data =>{},
            error =>{} 
        )
        this.cursorService.selectedCursor.next(event);
    }

    changeCursorFollower(event){
        this.apiService.patch('student/patchStudent', {'cursorFollower': event}).subscribe(
            data =>{console.log(data)},
            error =>{console.log(error)} 
        )
        this.cursorFollowerService.selectedCursorFollower.next(event);
    }
}
