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

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent {
    loginForm: FormGroup;
    incUsernameOrPwd: boolean = false;
    serverError: boolean = false;

    constructor(private formBuilder: FormBuilder,  private router: Router, private apiService: ApiService) {
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
                document.cookie = 'loggedIn=true; path=/;'
                document.cookie = 'token=' + data.token + '; path=/;'
                
            },
            error => this.handleError(error)
             );

    //     this.apiService.post('student/signup',
    //   { 'email': this.signupForm.controls['email'].value,
    //     'password': 'password',
        
    //     'firstName': this.signupForm.controls['firstName'].value,
    //     'lastName': this.signupForm.controls['lastName'].value })
    //     .subscribe(data => console.log(data),
    //                 error => console.log(error)
    //     );
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
