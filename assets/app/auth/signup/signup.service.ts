import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable, Subject } from "rxjs/Rx";
declare var firebase;

@Injectable()
export class SignupService {
    private database = firebase.database();

    constructor(private http: Http) { }

    addUserInfo(email: string, password: string, firstName: string, lastName: string): Observable<any> {
       // var uid = firebase.auth().currentUser.uid;
        var user = { 'email': email, 'password': password, 'firstName': firstName, 'lastName': lastName, 'avatar': '0', 'cursor': '0', 'cursorFollower': '0', 'coins': '0' };
       // var g = firebase.database().ref('users/student' + uid).set(user).then(x => subject.next(x));
        return this.http.post('http://localhost:3000/student', user).map((response: Response) => response.json()).catch((error: Response) => Observable.throw(error.json()));

    }
    createUser(email: string, password: string): Observable<string> {
        const subject = new Subject<string>();
        firebase.auth().createUserWithEmailAndPassword(email, password).then(x => subject.next('userCreated')).catch(error => subject.next(error.code));
        return subject.asObservable();
    }

    sendVerificationEmail(): Observable<string> {
        const subject = new Subject<string>();
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(x => subject.next('userCreated')).catch(error => subject.next(error.code));
        return subject.asObservable();
    }
}
