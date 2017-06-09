import { Component, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';

import { ArrayService } from '../../../shared/utils/array.service';
import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';
import { VocabularyService } from '../vocabulary/vocabulary.service';

@Component({
  selector: 'sq-word-pipes',
  templateUrl: './word-pipes.component.html',
  styleUrls: ['./word-pipes.component.css']
})
export class WordPipesComponent implements AfterViewInit{

  private vocabFull = [];
  private vocabRemaining = [];
  private endBoxes = [];
  private activeVocab: any;

  constructor( private renderer: Renderer, private arrayService: ArrayService, private vocabularyService: VocabularyService ){}

    ngAfterViewInit(){
      this.vocabFull = this.vocabularyService.getVocabularyFirst();

           for(var i = 0; i < document.body.getElementsByClassName('endBox').length; ++i){
            this.endBoxes.push(document.body.getElementsByClassName('endBox')[i]);
        }

        this.loadGameboard();
    }

    loadGameboard(){
        this.vocabRemaining = this.vocabFull;
      this.activeVocab = this.arrayService.selectRandom(this.vocabRemaining);
      this.arrayService.selectRandom(this.endBoxes).textContent = "hello";

    }

    
  /*
  * change the vocabulary when a new word is selected
  */
  // changeGradeLevel(event){

  //   switch(event) { 
  //       case 2: { 
  //           this.mathProblemsFull = this.mathProblemsService.getSecondGradeMathEquations();
  //           break; 
  //       }
  //       case 3: { 
  //           this.mathProblemsFull = this.mathProblemsService.getThirdGradeMathEquations();
  //           break; 
  //       }
  //       case 4: { 
  //           this.mathProblemsFull = this.mathProblemsService.getFourthGradeMathEquations();            
  //           break; 
  //       }
  //       case 5: { 
  //           this.mathProblemsFull = this.mathProblemsService.getFifthGradeMathEquations();                         
  //           break; 
  //       }
  //       case 6: { 
  //           this.mathProblemsFull  = this.mathProblemsService.getSixthGradeMathEquations();
  //           break; 
  //       } 
  //       default: { 
  //           this.mathProblemsFull = this.mathProblemsService.getFirstGradeMathEquations();
  //           break; 
  //       }
  //   }
  //   this.mathProblemsRemaining = this.mathProblemsFull.slice();
  }
