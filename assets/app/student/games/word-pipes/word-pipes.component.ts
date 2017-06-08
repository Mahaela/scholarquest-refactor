import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';

import { ArrayService } from '../../../shared/utils/array.service';
import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';

@Component({
  selector: 'sq-word-pipes',
  templateUrl: './word-pipes.component.html',
  styleUrls: ['./word-pipes.component.css']
})
export class WordPipesComponent {

  constructor( private renderer: Renderer, private arrayService: ArrayService ){
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
}
