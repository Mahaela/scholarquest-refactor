import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes, group} from '@angular/animations';

import { ArrayService } from '../../../shared/utils/array.service';
import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';
import { MathProblemsService } from '../math-problems/math-problems.service';

@Component({
  selector: 'sq-math-clouds',
  templateUrl: './math-clouds.component.html',
  styleUrls: ['./math-clouds.component.css'],
 animations: [
    trigger('move', [
     state('void', style({ })),
      state('normal', style({
        transform: 'translateX(0px)'
      })),
      state('moving', style({
        transform: 'translateX(700px)'
      })),
      transition('void => moving', animate(40000)),      
      transition('moving <=> normal', animate(1)),
    ]),
  ]
})
export class MathCloudsComponent {
  
  state ='moving';
  private mathProblemsFull = [];
  private mathProblemsRemaining = [];
  private displayedMathSolution: any;
  private score = 0;
  private strikes = 0;
  private scoreText ="Score : 0"
  private displayedProblems = [];

  constructor( private renderer: Renderer, private mathProblemsService: MathProblemsService, private arrayService: ArrayService ){
    
    this.mathProblemsFull = this.mathProblemsService.getFirstGradeMathEquations();
    this.mathProblemsRemaining = this.mathProblemsService.getFirstGradeMathEquations(); 
    this.getProblems();  
  }

  getProblems(){

    // get the solution that will be displayed
    this.displayedMathSolution = this.mathProblemsRemaining.splice(Math.floor(Math.random() * this.mathProblemsRemaining.length), 1)[0];    
    this.displayedProblems.push(this.arrayService.selectRandom(this.displayedMathSolution.problems));
  
    // find and remove the solution from the tempMathProblems array so that it doesnt repeat in the displayedProblems
    var tempMathProblems = this.mathProblemsFull.slice();
    for(let i = 0; i < tempMathProblems.length; i++){
      if(tempMathProblems[i].solution == this.displayedMathSolution.solution){
        tempMathProblems.splice(i,1);
      }
    }

    // add the remaining problems to be displayed    
    for(let j = 0; j < 2; j++){
      var equation = tempMathProblems.splice(Math.floor(Math.random() * tempMathProblems.length),1)[0]
      this.displayedProblems.push(equation.problems[Math.floor(Math.random() * equation.problems.length)]);
    }

    // shuffle the displayed problems
    this.displayedProblems = this.arrayService.shuffle(this.displayedProblems);
}

checkCorrect(position){
  console.log(position);
  var isCorrect = false;
  this.displayedMathSolution.problems.forEach(p =>{
    if(p == this.displayedProblems[position]){
      isCorrect = true;
      addToSco
    }
  });
}

slide(){
    this.state = 'normal';
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
