import { Component, ElementRef, ViewChild, Renderer, trigger } from '@angular/core';

import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';
import { MathProblemsService } from '../math-problems/math-problems.service';

@Component({
  selector: 'sq-math-clouds',
  templateUrl: './math-clouds.component.html',
  styleUrls: ['./math-clouds.component.css'],

})
export class MathCloudsComponent {
  
  private mathProblemsFull = [];
  private mathProblems = [];
  private displayedMathProblem: any;
  private score = 0;
  private strikes = 0;
  private scoreText ="Score : 0"
  private displayedProblems = [];


  constructor( private renderer: Renderer, private mathProblemsService: MathProblemsService ){
    
    this.mathProblemsFull = this.mathProblemsService.getFirstGradeMathEquations();
    this.mathProblems = this.mathProblemsService.getFirstGradeMathEquations();

    this.displayedMathProblem = this.mathProblems.splice(Math.floor(Math.random() * this.mathProblems.length), 1)[0];
    this.getProblems();
    
  }

  getProblems(){
    console.log(this.mathProblemsFull.indexOf(this.displayedMathProblem));
    var tempMathProblems = this.mathProblemsFull.slice();
    for (let i = 0; i < tempMathProblems.length; i++){
      if(tempMathProblems[i].solution == this.displayedMathProblem.solution){
        this.displayedProblems.push(tempMathProblems.splice(i,1)[0].problems[Math.floor(Math.random() * tempMathProblems[i].problems.length)]);
      }
    }
    console.log(this.displayedProblems);
    // this.displayedProblems.push(tempMathProblems.splice(Math.floor(Math.random() * this.mathProblems.length),1))[0];
    // this.displayedProblems.push(tempMathProblems.splice(Math.floor(Math.random() * this.mathProblems.length),1))[0];
}

  
/*
 * change the vocabulary when a new word is selected
 */
 changeGradeLevel(event){
  
    // switch(event) { 
    //     case 2: { 
    //         this.vocabularyFull = this.vocabularyService.getVocabularySecond();
    //         break; 
    //     }
    //     case 3: { 
    //         this.vocabularyFull = this.vocabularyService.getVocabularyThird();
    //         break; 
    //     }
    //     case 4: { 
    //         this.vocabularyFull = this.vocabularyService.getVocabularyFourth();            
    //         break; 
    //     }
    //     case 5: { 
    //         this.vocabularyFull = this.vocabularyService.getVocabularyFifth();                         
    //         break; 
    //     }
    //     case 6: { 
    //         this.vocabularyFull  = this.vocabularyService.getVocabularySixth();
    //         break; 
    //     } 
    //     default: { 
    //         this.vocabularyFull = this.vocabularyService.getVocabularyFirst();
    //         break; 
    //     } 
    // }
    // this.reload();
 }

/*
 * reload the gameboard;
 */ 
 reload(){
  //  this.vocabulary = this.vocabularyFull.slice();
  //  this.vocabularyQueue = [];
  //   // get the first word
  //   this.displayedWord = this.vocabulary.splice(Math.floor(Math.random() * this.vocabulary.length), 1)[0].word;
  //   // get the words for the queue
  //   var queueSize = this.vocabulary.length < 4 ? this.vocabulary.length : 4;
  //   for(var i = 0; i < queueSize; i++){
  //     this.vocabularyQueue.push(this.vocabulary.splice(Math.floor(Math.random() * this.vocabulary.length), 1)[0].word);
  //   }
  //     // update the score
  //     this.score = 0;
  //     this.scoreText = "Score: " + this.score.toString();

  //     // reset the strikes
  //     this.strikes = 0;
  //     console.log(this.strikeIcons);
  //     this.strikeIcons.forEach(icon => this.renderer.setElementStyle(icon, 'color', null))
  // }
}
}
