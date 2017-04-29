import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class StudentService {
    private name = '';
    private avatar = 0;
    private studentID= 0;
    private coins = new BehaviorSubject<number>(0);
    public coinsObs = this.coins.asObservable();
    private cursorFollowerStartXPos = 0;
    private cursorFollowerStartYPos = 0;
    private cursorFollower = 0;
    private cursor = 0;
    private cursorFollowerStartPosition = new BehaviorSubject<number[]>([0, 0, 0]);
    public cursorFollowerStartPositionObs = this.cursorFollowerStartPosition.asObservable();
    private cursorStartPosition = new BehaviorSubject<number[]>([0, 0, 0]);
    public cursorStartPositionObs = this.cursorStartPosition.asObservable();

    constructor(private http: Http) {
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setCoins(coins: number) {
      if(this.studentID != 0) {
        this.coins.next(this.coins.value + coins);
        return this.http.patch('http://localhost:3000/student/' + this.studentID, {
          'coins': this.coins.value,
          'id': this.studentID
        })
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
      }
    }

    setAvatar(avatar: number) {
      if(this.studentID != 0) {
        return this.http.patch('http://localhost:3000/student/' + this.studentID, {
          'avatar': avatar,
          'id': this.studentID
        })
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
      }
    }

    getAvatar(): number {
        return this.avatar;
    }

    getCursor(): number {
        return this.cursorStartPosition.value[0];
    }

    setCursorFollower(index: number, xPos: number, yPos: number) {
      if(this.studentID != 0) {
        this.cursorFollowerStartPosition.next([index, xPos, yPos]);
        this.cursorFollowerStartXPos = xPos;
        this.cursorFollowerStartYPos = yPos;
        return this.http.patch('http://localhost:3000/student/' + this.studentID, {
          'cursorFollower': index,
          'id': this.studentID
        })
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
      }
    }

    getCursorFollower(): number {
        return this.cursorFollowerStartPosition.value[0];
    }

    setCursor(index: number, xPos: number, yPos: number) {
      if(this.studentID != 0) {
        this.cursorStartPosition.next([index, xPos, yPos]);
        return this.http.patch('http://localhost:3000/student/' + this.studentID, {
          'cursor': index,
          'id': this.studentID
        })
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
      }
    }

    setStudentInfo(student: any) {
      this.avatar = student.avatar;
      this.coins.next(student.coins);
      this.cursorStartPosition.next([student.cusror, 0, 0]);
      this.cursorFollowerStartPosition.next([student.cursorFollower, 0, 0]);
      this.studentID = student.userId;
    }

    logout() {
        this.name = '';
        this.coins.next(0);
        this.avatar = 0;
        this.cursorStartPosition.next([0, 0, 0]);
        this.cursorFollowerStartPosition.next([0, 0, 0]);
        this.studentID = 0;
    }
}
