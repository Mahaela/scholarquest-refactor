import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../shared/utils/api.service';

@Component({
  templateUrl: 'email-verified.component.html',
  styleUrls: ['email-verified.component.css'],
})
export class EmailVerifiedComponent {

  emailVerified = false;

    constructor(private route: ActivatedRoute, private apiService: ApiService){
      this.apiService.post('student/verifyEmail', {id: this.route.snapshot.params['id']}).subscribe(
      response =>{
        this.emailVerified = true
      },
      error => {
        this.emailVerified = false;
      })
    }


}
