import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/utils/api.service';
import { CursorService } from '../../cursor/cursor.service';
import { CursorFollowerService } from '../../cursor-follower/cursor-follower.service';
import { StudentService } from '../../shared/utils/student.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent {
    loginForm: FormGroup;
    incUsernameOrPwd: boolean = false;
    serverError: boolean = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private cursorService: CursorService, private studentService: StudentService, private cursorFollowerService: CursorFollowerService) {
        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            pwd: ['', Validators.required]
        });
    }

    onSubmit() {
        this.apiService.post('student/login',
            { 'email': this.loginForm.controls['email'].value,
             'password': this.loginForm.controls['pwd'].value })
            .subscribe(
            data => {
                console.log(data);
                // this.cursorFollowerService.selectedCursorFollower.next(data.cursorFollower);
                // this.cursorService.selectedCursor.next(data.cursor);
                // this.studentService.coins.next(data.coins);
                document.cookie = 'loggedIn=true; path=/;'
                document.cookie = 'token=' + data.token + '; path=/;'
                this.router.navigate(['/profile']);
            },
            error => this.handleError(error)
        );
    }

     handleError(error: any) {
       if (error.error.message = "Invalid login credentials") {
         this.incUsernameOrPwd = true;
         this.serverError = false;
       }
       else {
         this.serverError = true;
         this.incUsernameOrPwd = false;
       }
     }
}
