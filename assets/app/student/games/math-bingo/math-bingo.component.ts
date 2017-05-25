import { Component, AfterViewInit, Renderer, ViewChild } from '@angular/core';
import { MathBingoEquationsSecondService } from './equations/math-bingo-equations-second.service';
import { WinDialogComponent } from '../win-dialog/win-dialog.component';

@Component({
    selector: 'sq-math-bingo',
    templateUrl: './math-bingo.component.html',
    styleUrls: ['./math-bingo.component.css'],
    providers: [MathBingoEquationsSecondService]
})
export class MathBingoComponent implements AfterViewInit {

    @ViewChild('winDialog') winDialog: WinDialogComponent;

    private squares = [];
    private equations = [];
    private scoreText = "Score: 0"
    private score = 0;
    private clock;
    private timeLeft;
    private currEquation: {solution: number, problem: string} = {solution: null, problem: ''};
    private secondsPerProblem = 20;
    private totEquations = [];

    // ngFor uses iternable objects and not numbers, so we put the numbers into an array
    private numRows = Array(5);
    private numCols = Array(5);

    constructor(private equationsSecond: MathBingoEquationsSecondService, private renderer: Renderer) {}

    ngAfterViewInit() {

        // get all the equations for a given grade
        this.totEquations = this.equationsSecond.getFirstGradeMathEquations();

       // get the table data cells 
        for(var i = 0; i < Object.keys(document.body.querySelectorAll('td')).length; ++i){
            this.squares.push(document.body.querySelectorAll('td')[i]);
        }

        // setup the game board
        this.initGameboard();
    }

    /*
     * change the equations when a new grade level is selected
     */ 
    changeGradeLevel(event){

        switch(event) { 
            case 2: { 
                //statements;
                this.totEquations = this.equationsSecond.getSecondGradeMathEquations(); 
                break; 
            }
            case 3: { 
                //statements; 
                this.totEquations = this.equationsSecond.getThirdGradeMathEquations();
                break; 
            }
            case 4: { 
                //statements;
                this.totEquations = this.equationsSecond.getFourthGradeMathEquations(); 
                break; 
            }
            case 5: { 
                //statements;
                this.totEquations = this.equationsSecond.getFifthGradeMathEquations(); 
                break; 
            }
            case 6: { 
                //statements; 
                this.totEquations = this.equationsSecond.getSixthGradeMathEquations();
                break; 
            } 
            default: { 
                //statements;
                this.totEquations = this.equationsSecond.getFirstGradeMathEquations(); 
                break; 
            } 
        }
        // stop the clock
        clearInterval(this.clock);
        
        this.initGameboard();
    }

    initGameboard() {
        this.initClock();
        this.score = 0;

        // the equations that will be used in the game
        var equations = this.totEquations.slice();
        
        // set the text content of the squares
        for (var i = 0; i < this.squares.length; i++){

            // set the text content of the free square
            if (i == (this.numRows.length * this.numCols.length - 1) / 2) {
                this.squares[i].textContent = "FREE";

                this.squares[i].selected = true;

                // set the background color of the free tile
                this.renderer.setElementStyle(this.squares[i], 'background-color', 'greenyellow');
            }
            else {            
                // pick a random solution, we don't want the game board to look the same across games
                var randIndex = Math.floor(Math.random() * equations.length);

                // set the text content to be the solution of the 
                this.squares[i].textContent = equations[randIndex].solution;

                // remove the solution from the array, so the same solution doesn't show up more than once on the game board
                // add the equation to the global equations array so we can use it later for the the problem
                this.equations.push(equations.splice(randIndex, 1)[0]);
            }
        
        }

        // display the problem
        this.setProblem();
    }

    initClock() {

        // set the displayed time to the amount of time given to answer the problem
        this.timeLeft = this.secondsPerProblem;

        // decrement the clock every second
        this.clock = setInterval(x => {
            this.timeLeft--;

            // if the clock runs out of time ...
            if (this.timeLeft == 0) {

                this.setScore(-3);

                // display a new problem
                this.setProblem();

                // reset the clock
                this.timeLeft = this.secondsPerProblem;
            }
        }, 1000);
    }

    setScore(points) {

        // add the score
        this.score += points;

        // don't let the score fall below 0
        if (this.score < 0) {
            this.score = 0;
        }

        // update the score text
        this.scoreText = "Score: " + this.score;
    }

    setProblem() {

        // choose a random problem
        var equationIndex = Math.floor(Math.random() * this.equations.length);
        var problemIndex = Math.floor(Math.random() * this.equations[equationIndex].problems.length);

        // updated the current equation 
        this.currEquation = {solution: this.equations[equationIndex].solution, problem: this.equations[equationIndex].problems[problemIndex]};
    }

    checkCorrect(squarePosition: number) 
    {
        if(this.squares[squarePosition].textContent == this.currEquation.solution) {

            this.squares[squarePosition].selected = true;

            // change the background color of the square to the correct color
            this.renderer.setElementStyle(this.squares[squarePosition], "background-color", "green");

            // add points
            this.setScore(this.timeLeft);

            // stop the clock
            clearInterval(this.clock);

            // if the game is won, do something
            if(this.checkVerticalWin() || this.checkHorizontalWin() || this.checkBackwardDiagonalWin() || this.checkForwardDiagonalWin()){
                this.timeLeft = 0;
                this.currEquation.problem = "";

                // open the dialog that will prompt the user to play again
                 this.winDialog.openDialog();
            }

            else {

                // stop the equation from being used again
                for(let i = 0; i < this.equations.length; ++i) {
                    if(this.equations[i].solution == this.currEquation.solution) {
                        this.equations.splice(i,1);
                    };
                }

                // display a new problem
                this.setProblem();

            // reset the clock
            this.initClock();
            }                 
        }
        else{
            
            // subtract points if an incorrect solution was chosen
            this.setScore(-2);
        }
    }

    /*
     * check if there is a win via a column
     */
    checkVerticalWin(): boolean {
        for(let i = 0; i < this.numCols.length; i++){
            var winCol = [];
            for(let k = 0; k < this.numRows.length; k++){
               if(this.squares[k * this.numCols.length + i].selected) winCol.push(this.squares[k * this.numCols.length + i]); 
            }
            if(winCol.length == this.numRows.length){ 
                 this.setTileColorWin(winCol);
                 return true;
            } 
        }
        return false;
    }

    /*
     * check if there is a win via a row 
     */
    checkHorizontalWin(): boolean {
        for(let i = 0; i < this.numRows.length; i < i++){
            var winRow = [];
            for(let k = 0; k < this.numCols.length; k < k++){
              if(this.squares[i * this.numCols.length + k].selected) winRow.push(this.squares[i * this.numCols.length + k]); 
            }
            if(winRow.length == this.numCols.length){
                this.setTileColorWin(winRow);
                return true;
            }  
        }
        return false;
    }

    /*
     * check if there is a win via a backward diaginal
     */
    checkBackwardDiagonalWin(): boolean {
        var winDiag = [];
        for(let i = 0; i < this.numRows.length; i < i++){
            if(this.squares[i * this.numCols.length + i].selected) winDiag.push(this.squares[i * this.numCols.length + i]);
        }
        if(winDiag.length == this.numCols.length){
             this.setTileColorWin(winDiag);
             return true;
        }
        return false;
    }

    /*
     * check if there is a win via a backwards diaginal
     */
    checkForwardDiagonalWin(): boolean {
        var winDiag = [];
        for(let i = 0; i < this.numRows.length; i < i++){
            if(this.squares[i * this.numCols.length + (this.numCols.length - i - 1)].selected) winDiag.push(this.squares[i * this.numCols.length + (this.numCols.length - i - 1)]);
        }
        if(winDiag.length == this.numCols.length){
             this.setTileColorWin(winDiag);
             return true;
        }
         return false;
    }

    /*
     * change the colors of the winning tiles
     */
    setTileColorWin(winTiles: any[]){
        winTiles.forEach(tile => this.renderer.setElementStyle(tile, 'background-color', 'purple'));
    }

    /*
     * restart the game 
     */
    reload() {

        for (var i = 0; i < this.squares.length; i++) {
            this.renderer.setElementStyle(this.squares[i], 'background-color', null);
            this.squares[i].selected = false;
        }

        this.score = 0;
        this.setScore(0);

        // stop the clock
        clearInterval(this.clock);

        this.initGameboard();
    }
}

