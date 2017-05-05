import { Component, AfterViewInit, ViewChild, ElementRef, Renderer, ContentChildren } from '@angular/core';
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


    @ViewChild('table') table : ElementRef;

    @ContentChildren('td') td;

    private squares = [];
    private equations = [];
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

    constructor(private equationsSecond: MathBingoEquationsSecondService, private renderer: Renderer, private studentService: StudentService, private elementRef: ElementRef) {
        this.equations = this.equationsSecond.getEquations();
        this.initClock();
        this.score = 0;
    }

    ngAfterViewInit() {

       //get the table data cells 
        for(var i = 0; i < Object.keys(document.body.querySelectorAll('td')).length; ++i){
            this.squares.push(document.body.querySelectorAll('td')[i]);
        }

        this.initGameboard();
       // this.setFormula();
    }


    initGameboard() {

        // for (var i = 0; i < this.nums.length; i++) {
        //     this.cNums.push(this.nums[i]);
        // }

        // var tempVal;
        // var randIndex;

        var equations = this.equationsSecond.getEquations();
        
        for (var i = 0; i < this.squares.length; i++){

            // Pick a remaining element...
            var randIndex = Math.floor(Math.random() * this.equations.length);

            // And swap it with the current element.
            var tempVal = this.equations[i];
            this.equations[i] = this.equations[randIndex];
            this.equations[randIndex] = tempVal;

            this.squares[i].textContent = this.equations[i].solutions;
            console.log(this.equations[i].solutions);
        }
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

