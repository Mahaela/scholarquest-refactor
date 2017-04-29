import { Component, AfterViewInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { MathBingoEquationsSecondService } from './equations/math-bingo-equations-second.service';
import { Equation } from './equations/equation';
import { StudentService } from '../../student.service';

@Component({
    selector: 'sq-math-bingo',
    templateUrl: './math-bingo.component.html',
    styleUrls: ['./math-bingo.component.css'],
    providers: [MathBingoEquationsSecondService]
})
export class MathBingoComponent implements AfterViewInit {
    @ViewChild('square0') square0;
    @ViewChild('square1') square1;
    @ViewChild('square2') square2;
    @ViewChild('square3') square3;
    @ViewChild('square4') square4;
    @ViewChild('square5') square5;
    @ViewChild('square6') square6;
    @ViewChild('square7') square7;
    @ViewChild('square8') square8;
    @ViewChild('square9') square9;
    @ViewChild('square10') square10;
    @ViewChild('square11') square11;
    @ViewChild('square12') square12;
    @ViewChild('square13') square13;
    @ViewChild('square14') square14;
    @ViewChild('square15') square15;
    @ViewChild('square16') square16;
    @ViewChild('square17') square17;
    @ViewChild('square18') square18;
    @ViewChild('square19') square19;
    @ViewChild('square20') square20;
    @ViewChild('square21') square21;
    @ViewChild('square22') square22;
    @ViewChild('square23') square23;
    @ViewChild('square24') square24;

    private squares = [];
    private nums = [];
    private numSquares = 24;
    private cNums = [];
    private cNumsIndex;
    private scoreText = "Score: 0"
    private score = 0;
    private gameOver = false;
    private clock;
    private timeLeft;
    private solution: string;
    private gameFinished = false;
    private equation = "";

    constructor(private equationsSecond: MathBingoEquationsSecondService, private renderer: Renderer, private studentService: StudentService) {
        this.nums = this.equationsSecond.getNums();
        this.initcNums();
        this.initClock();
        this.score = 0;
    }

    ngAfterViewInit() {
        this.initGameboard();
        this.setFormula();
        this.squares = [[this.square0, false], [this.square1, false], [this.square2, false], [this.square3, false],
        [this.square4, false], [this.square5, false], [this.square6, false], [this.square7, false], [this.square8, false],
        [this.square9, false], [this.square10, false], [this.square11, false], [this.square12, true], [this.square13, false],
        [this.square14, false], [this.square15, false], [this.square16, false], [this.square17, false], [this.square18, false],
        [this.square19, false], [this.square20, false], [this.square21, false], [this.square22, false], [this.square23, false],
        [this.square24, false]];
    }

    initcNums() {
        for (var i = 0; i < this.nums.length; i++) {
            this.cNums.push(this.nums[i]);
        }

        var tempVal;
        var randIndex;
        var currIndex = this.cNums.length;

        while (0 !== currIndex) {

            // Pick a remaining element...
            randIndex = Math.floor(Math.random() * currIndex);
            currIndex -= 1;

            // And swap it with the current element.
            tempVal = this.cNums[currIndex];
            this.cNums[currIndex] = this.cNums[randIndex];
            this.cNums[randIndex] = tempVal;
        }
    }

    initGameboard() {
        this.square0.nativeElement.textContent = this.cNums[0].getSolution();
        this.square1.nativeElement.textContent = this.cNums[1].getSolution();
        this.square2.nativeElement.textContent = this.cNums[2].getSolution();
        this.square3.nativeElement.textContent = this.cNums[3].getSolution();
        this.square4.nativeElement.textContent = this.cNums[4].getSolution();
        this.square5.nativeElement.textContent = this.cNums[5].getSolution();
        this.square6.nativeElement.textContent = this.cNums[6].getSolution();
        this.square7.nativeElement.textContent = this.cNums[7].getSolution();
        this.square8.nativeElement.textContent = this.cNums[8].getSolution();
        this.square9.nativeElement.textContent = this.cNums[9].getSolution();
        this.square10.nativeElement.textContent = this.cNums[10].getSolution();
        this.square11.nativeElement.textContent = this.cNums[11].getSolution();
        this.square13.nativeElement.textContent = this.cNums[12].getSolution();
        this.square14.nativeElement.textContent = this.cNums[13].getSolution();
        this.square15.nativeElement.textContent = this.cNums[14].getSolution();
        this.square16.nativeElement.textContent = this.cNums[15].getSolution();
        this.square17.nativeElement.textContent = this.cNums[16].getSolution();
        this.square18.nativeElement.textContent = this.cNums[17].getSolution();
        this.square19.nativeElement.textContent = this.cNums[18].getSolution();
        this.square20.nativeElement.textContent = this.cNums[19].getSolution();
        this.square21.nativeElement.textContent = this.cNums[20].getSolution();
        this.square22.nativeElement.textContent = this.cNums[21].getSolution();
        this.square23.nativeElement.textContent = this.cNums[22].getSolution();
        this.square24.nativeElement.textContent = this.cNums[23].getSolution();
    }

    initClock() {
        this.timeLeft = 10;
        this.clock = setInterval(x => {
            this.timeLeft--;
            if (this.timeLeft == 0) {
                this.setScore(-3);
                this.setFormula();
                clearInterval(this.clock);
                this.initClock();
            }
        }, 1000);
    }

    setScore(points) {
        this.score += points;
        if (this.score < 0) {
            this.score = 0;
        }
        this.scoreText = "Score: " + this.score;
    }

    setFormula() {
        var index = Math.floor(Math.random() * this.cNums.length)
        var equ = Math.floor(Math.random() * this.cNums[index].getFunctions().length);
        this.equation = this.cNums[index].getFunctions()[equ];
        this.solution = this.cNums[index].getSolution();
        this.cNumsIndex = index;
    }

    checkCorrect(pos) {
        pos = Number(pos);
        if (this.squares[pos][0].nativeElement.textContent == this.solution) {
            this.renderer.setElementAttribute(this.squares[pos][0].nativeElement, 'id', null);
            clearInterval(this.clock);
            this.setScore(this.timeLeft);
            this.cNums.splice(this.cNumsIndex, 1);
            this.renderer.setElementAttribute(this.squares[pos][0].nativeElement, 'class', 'picked');
            this.squares[pos][1] = true;
            if (!this.checkWin(pos)) {
                this.initClock();
                this.setFormula();
            }
            else {
                this.gameFinished = true;
                this.timeLeft = 0;
                this.equation = '';
                this.studentService.setCoins(this.score).subscribe();
            }
        }
        else (this.setScore(-1));
    }

    checkWin(pos: number): boolean {
        return (this.checkHorizontalWin(pos) || this.checkVerticalWin(pos) || this.checkDiagonalWin())
    }

    checkVerticalWin(pos: number): boolean {
        var winningSquares = [pos];

        //check squares on top of the winner
        var x = pos - 5;
        while (x > -1) {
            if (this.squares[x][1]) {
                winningSquares.push(x);
                x -= 5;
            }
            else {
                return false;
            }
        }
        //check squares below for a winner
        x = pos + 5;
        while (x < this.squares.length) {
            if (this.squares[x][1]) {
                winningSquares.push(x);
                x += 5;
            }
            else {
                return false;
             }
        }
        for (let y in winningSquares) {
            this.renderer.setElementAttribute(this.squares[winningSquares[y]][0].nativeElement, 'class', 'win');
        }
        return true;
    }

    checkHorizontalWin(pos: number): boolean {
        var winningSquares = [pos];

        //check left
        var x = pos - 1;
        while (x % 5 != 4 && x > -1) {
            if (this.squares[x][1]) {
                winningSquares.push(x);
                x -= 1;
            }
            else {
                return false;
            }
        }

        //check right
        x = pos + 1;
        while (x % 5 != 0) {
            if (this.squares[x][1]) {
                winningSquares.push(x);
                 x += 1;
             }
             else {
                return false;
             }
        }
        for (let y in winningSquares) {
            this.renderer.setElementAttribute(this.squares[winningSquares[y]][0].nativeElement, 'class', 'win');
        }
        return true;
    }

    checkDiagonalWin(): boolean {
        var downward = [0, 6, 18, 24];
        var upward = [4, 8, 16, 20];
        var win = true;

        for (let i in downward) {
            if (!this.squares[downward[i]][1]) {
                win = false;
                break;
            }
        }
        if (win) {
            for (let i in downward) {
                this.renderer.setElementAttribute(this.squares[downward[i]][0].nativeElement, 'class', 'win');
            }
            return true;
        }
        else {
            for (let i in upward) {
                if (!this.squares[upward[i]][1]) {
                    return false;
                }
            }
        }
        for (let i in upward) {
             this.renderer.setElementAttribute(this.squares[upward[i]][0].nativeElement, 'class', 'win');
         }
         return true;
    }

    reload() {
        this.initcNums();
        this.cNums = [];
        this.initcNums();
        this.initClock();
        this.score = 0;
        this.setScore(0);
        this.initGameboard();
        this.setFormula();
        clearInterval(this.clock);
        this.cNums = [];
        this.initcNums();

        for (var i = 0; i < this.squares.length; i++) {
            this.renderer.setElementAttribute(this.squares[i][0].nativeElement, 'class', null);
        }
    }
}

