import { Component} from '@angular/core';

import { SignupService } from '../signup.service';

@Component({
  selector: 'sq-email-confirmation',
  template: `
    <div id="backdrop">
        <p>
         We have sent an email to your email address. Please follow the instructions to verify your account.
        </p>
        <button class="btn btn-primary" (click)="resend()">Resend Email</button>
    </div>
  `,
  styleUrls: ['email-confirmation.component.css'],
})
export class EmailConfirmationComponent {

    constructor(private signupService: SignupService) { }

    resend() {
        this.signupService.sendVerificationEmail();
  }

}
