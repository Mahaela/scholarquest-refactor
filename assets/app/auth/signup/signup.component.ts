import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { ApiService } from '../../shared/utils/api.service';

@Component({
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],

})
export class SignupComponent {
    private signupForm: FormGroup;
    private emailInUseError = false;
    private serverError = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {

        this.signupForm = formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]],
             passwords: formBuilder.group({
                 pwd1: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
                 pwd2: ['', Validators.required]
             }, { validator: this.pwdMatch })
        });
    }

    onSubmit() {

      this.apiService.post('student/signup',
      { 'email': this.signupForm.controls['email'].value,
        'password': this.signupForm.controls.passwords.controls.pwd1.value,
        'firstName': this.signupForm.controls['firstName'].value,
        'lastName': this.signupForm.controls['lastName'].value }).subscribe(result => console.log(result));       
    }

    handleError(error: any){
      if(error.error.name = "ValidationError"){
        this.emailInUseError = true;
        this.serverError = false;
      }
      else{
        this.serverError = true;
        this.emailInUseError = false;
      }
    }

    errorMessage(control: FormControl): boolean {
      if (control.untouched || control.valid) {
        return false;
      }
      else {
        return true;
      }
    }

     pwdErrorMessage(group: FormGroup): boolean {
        if (group.controls['pwd1'].touched && group.controls['pwd2'].touched
            && !group.valid) {
            return true;
        }
        else return false;
    }

    pwdMatch(group: FormGroup): { [key: string]: boolean } {
        if (group.controls['pwd1'].value === group.controls['pwd2'].value) {
            return null;
        }
        else {
            return { example: true };
        }
    }
}

