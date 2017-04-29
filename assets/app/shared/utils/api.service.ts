import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from "@angular/http";


@Injectable()
export class ApiService {
    
    constructor(private http: Http) {
    }

    /*
     * patch request
     */ 
    patch(params: any) {
        return this.http.patch('http://localhost:3000/student/patch', params)
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
    }

    /*
     * post request
     */ 
    post(path: string) {
      console.log(path)
        return this.http.post('http://localhost:3000/student' + path, {})
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
    }
    
}
