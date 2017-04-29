import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'sq-capacity-signup',
  templateUrl: 'capacity-signup.component.html',
  styleUrls: ['capacity-signup.component.css'],
})
export class CapacitySignupComponent  {

    constructor(private router: Router, private signupService: SignupService) { }

    navigate(role: string) {

        this.router.navigate(['/signup/credentials']);
  }

}
