import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs/Rx";
import { StudentService } from "../../student/student.service"
declare var firebase;


@Injectable()
export class LoginService {

    constructor(private studentService: StudentService) { }

    login(email: string, password: string): Observable<string>{
        var subject = new Subject<string>();
        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            var user = firebase.auth().currentUser;
            if (user.emailVerified) {
                subject.next("loggedIn");
            }
            else {
                user.sendEmailVerification();
                subject.next("emailVerify");
            }
        }).catch(function (error) {
            subject.next(String(error.code));
            });
        return subject.asObservable();
    }

    sendEmail() {
        firebase.auth().currentUser.sendEmailVerification();
    }
}
