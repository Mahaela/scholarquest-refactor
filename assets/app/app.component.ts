import { Component } from '@angular/core';

import { StudentService } from './student/student.service';
import { AuthService } from './auth/auth.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    private xPos = 0;
    private yPos = 0;
    private cursorFollower = '0';
    private loaded: Promise<boolean>;
    private backgroundimg = require('./assets/backgrounds/stone2.png');

    constructor(private studentService: StudentService, private authService: AuthService) {
        this.loaded = new Promise(resolve => {
          authService.getUserInfo().subscribe(data => {this.setupStudent(data);
            resolve(true)},
             error => resolve(true));
        });
        document.body.style.backgroundImage ="url(this.backgroundimg)";
    }
    setupStudent(data: any){
      this.studentService.setStudentInfo(data);
      this.authService.setLoggedIn(true);
    }

    mouseMove($event) {
        let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        this.xPos = event.clientX + xOffset;
        this.yPos = event.clientY + yOffset;
    }
}