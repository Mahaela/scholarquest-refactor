import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class StudentService {

    public coins = new BehaviorSubject(0);

    constructor() {}
    
    
}   
