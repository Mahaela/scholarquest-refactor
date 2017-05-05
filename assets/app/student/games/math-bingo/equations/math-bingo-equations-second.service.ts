import { Injectable } from '@angular/core';

@Injectable()
export class MathBingoEquationsSecondService {
    getEquations(): any[] {
        return [
        {solutions: 0, equations: ["0 + 0", "5 - 5", "20 - 20"]},
        {solutions: 1, equations: ["0 + 1", "10 - 9", " 15 - 14"]},
        {solutions: 2, equations: ["1 + 1", "3 - 1", "18 - 16"]},
        {solutions: 3, equations: ["2 + 1", "6 - 3", "13 - 10"]},
        {solutions: 4, equations: ["2 + 2", "10 - 6", "19 - 15"]},
        {solutions: 5, equations: ["1 + 4", "6 - 1", "14 - 9"]},
        {solutions: 6, equations: ["3 + 3", "10 - 4", "17 - 11"]},
        {solutions: 7, equations: ["4 + 3", "8 - 1", "20 - 13"]},
        {solutions: 8, equations: ["2 + 6", "8 + 0", "17 - 9"]},
        {solutions: 9, equations: ["5 + 4", "14 - 5", "18 - 9"]},
        {solutions: 10, equations: ["2 + 8", "12 - 2", "15 - 5"]},
        {solutions: 11, equations: ["9 + 2", "13 - 2", "12 - 1"]},
        {solutions: 12, equations: ["7 + 5", "8 + 4", "15 - 3"]},
        {solutions: 13, equations: ["6 + 7", "14 - 1", "19 - 6"]},
        {solutions: 14, equations: ["8 + 6", "13 + 1", "17 - 3"]},
        {solutions: 15, equations: ["6 + 9", "12 + 3", "18 - 3"]},
        {solutions: 16, equations: ["8 + 8", "2 + 14", "18 - 2"]},
        {solutions: 17, equations: ["9 + 8", "12 + 5", "20 - 3"]},
        {solutions: 18, equations: ["12 + 6", "3 + 15", "19 - 1"]},
        {solutions: 19, equations: ["1 + 18", "11 + 8", "7 + 12"]},
        {solutions: 20, equations: ["10 + 10", "12 + 8", "5 + 15"]},
        {solutions: 21, equations: ["14 + 7", "18 + 3", "8 + 13"]},
        {solutions: 22, equations: ["15 + 7", "12 + 10", "8 + 14"]},
        {solutions: 23, equations: ["19 + 4", "16 + 7", "12 + 11"]}
        ]
    }
}
