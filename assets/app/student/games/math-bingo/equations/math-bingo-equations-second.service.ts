import { Injectable } from '@angular/core';

@Injectable()
export class MathBingoEquationsSecondService {
    getEquations(): any[] {
        return [
        {solution: 0, problems: ["0 + 0", "5 - 5", "20 - 20"]},
        {solution: 1, problems: ["0 + 1", "10 - 9", " 15 - 14"]},
        {solution: 2, problems: ["1 + 1", "3 - 1", "18 - 16"]},
        {solution: 3, problems: ["2 + 1", "6 - 3", "13 - 10"]},
        {solution: 4, problems: ["2 + 2", "10 - 6", "19 - 15"]},
        {solution: 5, problems: ["1 + 4", "6 - 1", "14 - 9"]},
        {solution: 6, problems: ["3 + 3", "10 - 4", "17 - 11"]},
        {solution: 7, problems: ["4 + 3", "8 - 1", "20 - 13"]},
        {solution: 8, problems: ["2 + 6", "8 + 0", "17 - 9"]},
        {solution: 9, problems: ["5 + 4", "14 - 5", "18 - 9"]},
        {solution: 10, problems: ["2 + 8", "12 - 2", "15 - 5"]},
        {solution: 11, problems: ["9 + 2", "13 - 2", "12 - 1"]},
        {solution: 12, problems: ["7 + 5", "8 + 4", "15 - 3"]},
        {solution: 13, problems: ["6 + 7", "14 - 1", "19 - 6"]},
        {solution: 14, problems: ["8 + 6", "13 + 1", "17 - 3"]},
        {solution: 15, problems: ["6 + 9", "12 + 3", "18 - 3"]},
        {solution: 16, problems: ["8 + 8", "2 + 14", "18 - 2"]},
        {solution: 17, problems: ["9 + 8", "12 + 5", "20 - 3"]},
        {solution: 18, problems: ["12 + 6", "3 + 15", "19 - 1"]},
        {solution: 19, problems: ["1 + 18", "11 + 8", "7 + 12"]},
        {solution: 20, problems: ["10 + 10", "12 + 8", "5 + 15"]},
        {solution: 21, problems: ["14 + 7", "18 + 3", "8 + 13"]},
        {solution: 22, problems: ["15 + 7", "12 + 10", "8 + 14"]},
        {solution: 23, problems: ["19 + 4", "16 + 7", "12 + 11"]}
        ]
    }
}
