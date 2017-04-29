import { Injectable } from '@angular/core';
import { Equation } from './equation';

@Injectable()
export class MathBingoEquationsSecondService {
    private nums = [];

    constructor() {
        this.nums.push(new Equation(0,["0 + 0", "5 - 5", "20 - 20"]));
        this.nums.push(new Equation(1,["0 + 1", "10 - 9", " 15 - 14"]));
        this.nums.push(new Equation(2,["1 + 1", "3 - 1", "18 - 16"]));
        this.nums.push(new Equation(3,["2 + 1", "6 - 3", "13 - 10"]));
        this.nums.push(new Equation(4,["2 + 2", "10 - 6", "19 - 15"]));
        this.nums.push(new Equation(5,["1 + 4", "6 - 1", "14 - 9"]));
        this.nums.push(new Equation(6,["3 + 3", "10 - 4", "17 - 11"]));
        this.nums.push(new Equation(7,["4 + 3", "8 - 1", "20 - 13"]));
        this.nums.push(new Equation(8,["2 + 6", "8 + 0", "17 - 9"]));
        this.nums.push(new Equation(9,["5 + 4", "14 - 5", "18 - 9"]));
        this.nums.push(new Equation(10,["2 + 8", "12 - 2", "15 - 5"]));
        this.nums.push(new Equation(11,["9 + 2", "13 - 2", "12 - 1"]));
        this.nums.push(new Equation(12,["7 + 5", "8 + 4", "15 - 3"]));
        this.nums.push(new Equation(13,["6 + 7", "14 - 1", "19 - 6"]));
        this.nums.push(new Equation(14,["8 + 6", "13 + 1", "17 - 3"]));
        this.nums.push(new Equation(15,["6 + 9", "12 + 3", "18 - 3"]));
        this.nums.push(new Equation(16,["8 + 8", "2 + 14", "18 - 2"]));
        this.nums.push(new Equation(17,["9 + 8", "12 + 5", "20 - 3"]));
        this.nums.push(new Equation(18,["12 + 6", "3 + 15", "19 - 1"]));
        this.nums.push(new Equation(19,["1 + 18", "11 + 8", "7 + 12"]));
        this.nums.push(new Equation(20,["10 + 10", "12 + 8", "5 + 15"]));
        this.nums.push(new Equation(21,["14 + 7", "18 + 3", "8 + 13"]));
        this.nums.push(new Equation(22,["15 + 7", "12 + 10", "8 + 14"]));
        this.nums.push(new Equation(23,["19 + 4", "16 + 7", "12 + 11"]));
    }

    getNums(): any[] {
        return this.nums;
    }
}
