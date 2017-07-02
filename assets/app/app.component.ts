import { Component } from '@angular/core';
import { CursorService } from './cursor/cursor.service';
import { CursorFollowerService } from './cursor-follower/cursor-follower.service';
import { ApiService } from './shared/utils/api.service';
import { StudentService } from './shared/utils/student.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    private xPos = 0;
    private yPos = 0;
    private cursorFollower = '0';

    constructor(private cursorService: CursorService, private apiService: ApiService, private studentService: StudentService, private cursorFollowerService: CursorFollowerService) {
        this.apiService.post('student/getStudent', {}).subscribe(
        data =>{ 
            this.cursorFollowerService.selectedCursorFollower.next(data.cursorFollower);
            this.studentService.coins.next(data.coins);
            this.cursorService.selectedCursor.next(data.cursor)},
        error => console.log("error")
        )
    }
    mouseMove(event) {
        let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        this.xPos = event.clientX + xOffset;
        this.yPos = event.clientY + yOffset;
    }
}