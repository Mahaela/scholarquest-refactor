import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from "@angular/http";

import { CookieService } from './cookie.service';
import { StudentService } from './student.service';

@Injectable()
export class ApiService {

    constructor( private http: Http, private cookieService: CookieService, private studentService: StudentService ) {}

    /*
     * patch request
     */ 
    patch(path: string, params: any) {
        var token = this.cookieService.getCookie('token');
        if(token) params['token'] = token;

        return this.http.patch('http://localhost:3000/' + path, params)
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
    }

    /*
     * post request
     */ 
    post(path: string, params: any) {
        var token = this.cookieService.getCookie('token');
        if(token) params['token'] = token;
        return this.http.post('http://localhost:3000/' + path, params)
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error));
    }

    /*
     * add to the users score
     */ 
    addCoins(coins: number){

        this.post('student/getStudent', {'token': this.cookieService.getCookie('token')}).subscribe(response => { 
            this.studentService.coins.next(response.coins + coins);
            this.patch('student/patchStudent', {'token': this.cookieService.getCookie('token'), 'coins' : response.coins + coins}).subscribe(r => { 
            });
        })

    }
}   
