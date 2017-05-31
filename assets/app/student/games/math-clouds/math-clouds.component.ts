import { Component, ElementRef, ViewChild, Renderer, trigger } from '@angular/core';

import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';

@Component({
  selector: 'sq-math-clouds',
  templateUrl: './math-clouds.component.html',
  styleUrls: ['./math-clouds.component.css'],
  animations: [
    trigger()
  ]
})
export class MathCloudsComponent {
  
  private vocabularyFull = [];
  private vocabulary = [];
  private displayedWord: string;
  private vocabularyQueue = [];
  private score = 0;
  private strikes = 0;
  private scoreText ="Score : 0"
  private strikeIcons = []

  @ViewChild('cloud1') cloud1: ElementRef;
  @ViewChild('cloud2') cloud2: ElementRef;
  @ViewChild('cloud3') cloud3: ElementRef;

  constructor( private renderer: Renderer ){}

  
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
