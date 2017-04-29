import { Routes } from '@angular/router';

import { CapacitySignupComponent } from './capacity-signup/capacity-signup.component';
import { CredentialsSignupComponent } from './credentials-signup/credentials-signup.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

export const SIGNUP_ROUTES: Routes = [
    //{ path: '', component: CapacitySignupComponent },
    { path: 'credentials', component: CredentialsSignupComponent },
    { path: 'emailconf', component: EmailConfirmationComponent}
]