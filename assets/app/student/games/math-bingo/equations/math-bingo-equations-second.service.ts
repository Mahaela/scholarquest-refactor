import { Injectable } from '@angular/core';

@Injectable()
export class MathBingoEquationsSecondService {

    getFirstGradeMathEquations(): any[] {
        return [
        {solution: '0', problems: ['0 + 0', '5 - 5', '20 - 20']},
        {solution: '1', problems: ['0 + 1', '10 - 9', ' 15 - 14']},
        {solution: '2', problems: ['1 + 1', '3 - 1', '18 - 16']},
        {solution: '3', problems: ['2 + 1', '6 - 3', '13 - 10']},
        {solution: '4', problems: ['2 + 2', '10 - 6', '19 - 15']},
        {solution: '5', problems: ['1 + 4', '6 - 1', '14 - 9']},
        {solution: '6', problems: ['3 + 3', '10 - 4', '17 - 11']},
        {solution: '7', problems: ['4 + 3', '8 - 1', '20 - 13']},
        {solution: '8', problems: ['2 + 6', '8 + 0', '17 - 9']},
        {solution: '9', problems: ['5 + 4', '14 - 5', '18 - 9']},
        {solution: '10', problems: ['2 + 8', '12 - 2', '15 - 5']},
        {solution: '11', problems: ['9 + 2', '13 - 2', '12 - 1']},
        {solution: '12', problems: ['7 + 5', '8 + 4', '15 - 3']},
        {solution: '13', problems: ['6 + 7', '14 - 1', '19 - 6']},
        {solution: '14', problems: ['8 + 6', '13 + 1', '17 - 3']},
        {solution: '15', problems: ['6 + 9', '12 + 3', '18 - 3']},
        {solution: '16', problems: ['8 + 8', '2 + 14', '18 - 2']},
        {solution: '17', problems: ['9 + 8', '12 + 5', '20 - 3']},
        {solution: '18', problems: ['12 + 6', '3 + 15', '19 - 1']},
        {solution: '19', problems: ['1 + 18', '11 + 8', '7 + 12']},
        {solution: '20', problems: ['10 + 10', '12 + 8', '5 + 15']},
        {solution: '21', problems: ['14 + 7', '18 + 3', '8 + 13']},
        {solution: '22', problems: ['15 + 7', '12 + 10', '8 + 14']},
        {solution: '23', problems: ['19 + 4', '16 + 7', '12 + 11']}
        ]
    }

    getSecondGradeMathEquations(): any[] {
        return [
        {solution: '62', problems: ['32 + 30', '76 - 14', '32 + 30']},
        {solution: '36', problems: ['48 - 12', '24 + 12', '88 - 52']},
        {solution: '71', problems: ['40 + 31', '83 - 12']},
        {solution: '47', problems: ['68 - 21', '25 + 22']},
        {solution: '36', problems: ['32 + 4', '48 - 12', '59 - 23']},
        {solution: '24', problems: ['44 - 20', '13 + 11']},
        {solution: '112', problems: ['61 + 51']},
        {solution: '92', problems: ['68 + 24', '70 + 22']},
        {solution: '35', problems: ['14 + 21']},
        {solution: '50', problems: ['18 + 32', '89 - 39']},
        {solution: '74', problems: ['19 + 65']},
        {solution: '54', problems: ['35 + 19']},
        {solution: '57', problems: ['34 + 12']},
        {solution: '70', problems: ['43 + 27']},
        {solution: '48', problems: ['84 - 36']},
        {solution: '13', problems: ['34 - 21']},
        {solution: '82', problems: ['63 + 19']},
        {solution: '83', problems: ['33 + 50']},
        {solution: '93', problems: ['52 + 41']},
        {solution: '19', problems: ['29 - 10']},
        {solution: '16', problems: ['60 - 44']},
        {solution: '68', problems: ['86 - 18']},
        {solution: '28', problems: ['49 - 21']},
        {solution: '27', problems: ['39 - 12']}
        ]
    }

    getThirdGradeMathEquations(): any[] {
        return [
        {solution: '0', problems: ['0 x 0', '5 x 0', '20 x 0']},
        {solution: '1', problems: ['0 x 1']},
        {solution: '2', problems: ['1 x 2']},
        {solution: '3', problems: ['3 x 1']},
        {solution: '4', problems: ['2 x 2', '4 x 1']},
        {solution: '5', problems: ['5 x 1']},
        {solution: '6', problems: ['3 x 2', '2 x 3']},
        {solution: '7', problems: ['7 x 1']},
        {solution: '8', problems: ['2 x 4']},
        {solution: '9', problems: ['9 x 1', '3 x 3']},
        {solution: '10', problems: ['2 x 5']},
        {solution: '11', problems: ['11 x 1']},
        {solution: '12', problems: ['3 x 4', '2 x 6']},
        {solution: '13', problems: ['13 x 1']},
        {solution: '14', problems: ['7 x 2']},
        {solution: '15', problems: ['5 x 3']},
        {solution: '16', problems: ['8 x 2', '4 x 4']},
        {solution: '17', problems: ['17 x 1']},
        {solution: '18', problems: ['6 x 3', '9 x 2']},
        {solution: '19', problems: ['19 x 1']},
        {solution: '20', problems: ['5 x 4', '10 x 2']},
        {solution: '21', problems: ['7 x 3']},
        {solution: '22', problems: ['11 x 2']},
        {solution: '23', problems: ['23 x 1']}
        ]
    }

    getFourthGradeMathEquations(): any[] {
        return [
        {solution: '0', problems: ['0 x 0', '5 x 0', '20 x 0']},
        {solution: '1', problems: ['0 x 1']},
        {solution: '2', problems: ['1 x 2']},
        {solution: '3', problems: ['3 x 1']},
        {solution: '4', problems: ['2 x 2', '4 x 1']},
        {solution: '5', problems: ['5 x 1']},
        {solution: '6', problems: ['3 x 2', '2 x 3']},
        {solution: '7', problems: ['7 x 1']},
        {solution: '8', problems: ['2 x 4']},
        {solution: '9', problems: ['9 x 1', '3 x 3']},
        {solution: '10', problems: ['2 x 5']},
        {solution: '11', problems: ['11 x 1']},
        {solution: '12', problems: ['3 x 4', '2 x 6']},
        {solution: '13', problems: ['13 x 1']},
        {solution: '14', problems: ['7 x 2']},
        {solution: '15', problems: ['5 x 3']},
        {solution: '16', problems: ['8 x 2', '4 x 4']},
        {solution: '17', problems: ['17 x 1']},
        {solution: '18', problems: ['6 x 3', '9 x 2']},
        {solution: '19', problems: ['19 x 1']},
        {solution: '20', problems: ['5 x 4', '10 x 2']},
        {solution: '21', problems: ['7 x 3']},
        {solution: '22', problems: ['11 x 2']},
        {solution: '23', problems: ['23 x 1']}
        ]
    }

    getFifthGradeMathEquations(): any[] {
        return [
        {solution: '1/4', problems: ['3/4 - 2/4']},
        {solution: '0.5', problems: ['1.5 - 0.5']},
        {solution: '1', problems: ['1/2 + 1/2', '2 x 3']},
        {solution: '1.8', problems: ['1.3 + 0.5']},
        {solution: '8/5', problems: ['4/5 + 4/5']},
        {solution: '2.3', problems: ['1.7 + 0.6']},
        {solution: '3.9', problems: ['2.1 + 1.8']},
        {solution: '4.6', problems: ['3.1 + 1.5']},
        {solution: '1/6', problems: ['5/6 - 4/6']},
        {solution: '3/4', problems: ['1/4 + 2/4', '3 x 3']},
        {solution: '3/5', problems: ['4/5 - 1/5']},
        {solution: '5/5', problems: ['3/5 + 2/5']},
        {solution: '4/6', problems: ['2/6 + 2/6']},
        {solution: '1/2', problems: ['2/2 - 1/2']},
        {solution: '2/2', problems: ['1/2 + 1/2']},
        {solution: '4/4', problems: ['2/4 + 2/4']},
        {solution: '5/6', problems: ['2/6 + 3/6']},
        {solution: '3.9', problems: ['1.6 + 2.3']},
        {solution: '5.2', problems: ['3.6 + 1.6']},
        {solution: '5', problems: ['2.2 + 2.8']},
        {solution: '3.3', problems: ['2.1 + 1.2']},
        {solution: '4.2', problems: ['1.7 + 2.5']},
        {solution: '1.6', problems: ['0.8 + 0.8']},
        {solution: '1.4', problems: ['0.8 + 0.6']}
        ]
    }
    getSixthGradeMathEquations(): any[] {
        return [
        {solution: '0', problems: ['1 x 5 x 0']},
        {solution: '1', problems: ['-1 x -1']},
        {solution: '-2', problems: ['-1 x 2']},
        {solution: '3', problems: ['III']},
        {solution: '4', problems: ['IV']},
        {solution: '5', problems: ['5 x 1']},
        {solution: '6', problems: ['(3 x 4) / 2']},
        {solution: '7', problems: ['6 + 4 - 3']},
        {solution: '8', problems: ['320 / 40']},
        {solution: '9', problems: ['9 x 1', '3 x 3']},
        {solution: '10', problems: ['(4 x -2) + 18']},
        {solution: '11', problems: ['10 - (-6) -5 ']},
        {solution: '12', problems: ['3 x 2 x 3']},
        {solution: '13', problems: ['144 / 12 + 16 / 16']},
        {solution: '14', problems: ['8 x 2 - 2']},
        {solution: '15', problems: ['5 x 3']},
        {solution: '16', problems: ['(20 / 2) + 6']},
        {solution: '17', problems: ['3 x 3 x 3 - 10']},
        {solution: '18', problems: ['20 / 2 + 8']},
        {solution: '19', problems: ['14 / 2 x 3 - 2']},
        {solution: '20', problems: ['10 / 5 x 10']},
        {solution: '21', problems: ['7 x 3 / 1']},
        {solution: '22', problems: ['XXII']},
        {solution: '23', problems: ['3 x 6 + 15 / 3']}
        ]
    } 
}
