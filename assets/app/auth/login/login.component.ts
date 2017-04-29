import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { StudentService } from '../../student/student.service';



@Component({
    selector: 'sq-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent {
    loginForm: FormGroup;
    incUsernameOrPwd: boolean = false;
    serverError: boolean = false;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private studentService: StudentService) {
        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            pwd: ['', Validators.required]
        });
    }

    onSubmit() {
      this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['pwd'].value)
        .subscribe(
          data => this.logIn(data),
          error => this.handleError(error)
        )
     }
     logIn(data: any){
      this.authService.setLoggedIn(true);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      this.studentService.setStudentInfo(data);
      this.router.navigate(['profile']);
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
