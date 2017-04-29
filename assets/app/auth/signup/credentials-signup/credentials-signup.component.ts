import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'sq-credentials-signup',
    templateUrl: 'credentials-signup.component.html',
    styleUrls: ['credentials-signup.component.css'],

})
export class CredentialsSignupComponent {
    private signupForm: FormGroup;
    private emailInUseError = false;
    private serverError = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {

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
      this.authService.signup(
        this.signupForm.controls['email'].value,
        this.signupForm.get(['passwords', 'pwd1']).value,
        this.signupForm.controls['firstName'].value,
        this.signupForm.controls['lastName'].value)
        .subscribe(data => this.router.navigate(['/login']),
                    error => this.handleError(error)
        );
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

