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

  @ViewChild('gameTable') gameTable;

  private vocabFull = [];
  private vocabRemaining = [];
  private endBoxes = [];
  private definitionsShown = [];
  private numDefinitionsShown = 3;
  private activeVocabulary: any;
  private startBoxes = [];
  private partsBoxes = [];
  private numParts = 3;
  private dragImages = [];
  private draggedImg: string;
  private selectedPipeBox: any;
  private gameBoard = [];
  private pipes = [ 
   require('../../../assets/games/word-pipes/one_bottom_left.jpg'),
   require('../../../assets/games/word-pipes/one_bottom_right.jpg'),
   require('../../../assets/games/word-pipes/one_top_left.jpg'),
   require('../../../assets/games/word-pipes/one_top_right.jpg'),
   require('../../../assets/games/word-pipes/one_top_bottom.jpg'),
   require('../../../assets/games/word-pipes/one_left_right.jpg'),
 
  //  require('../../../assets/games/word-pipes/two_v_bottom_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_v_bottom_right.jpg'),
  //  require('../../../assets/games/word-pipes/two_v_top_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_v_top_right.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_bottom_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_bottom_right.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_top_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_top_right.jpg')
  ]
  constructor( private renderer: Renderer, private arrayService: ArrayService, private vocabularyService: VocabularyService ){}

    ngAfterViewInit() {     
      this.vocabFull = this.vocabularyService.getVocabularyFirst();
      for(var i = 0; i < document.body.getElementsByClassName('endBox').length; ++i){
        this.endBoxes.push(document.body.getElementsByClassName('endBox')[i]);
      }
      for(var i = 0; i < document.body.getElementsByClassName('startBox').length; ++i){
        this.startBoxes.push(document.body.getElementsByClassName('startBox')[i]);
      }
      for(var i = 0; i < document.body.getElementsByClassName('partsBox').length; ++i){
        this.partsBoxes.push(document.body.getElementsByClassName('partsBox')[i]);
      }
      for(var i = 0; i < document.body.getElementsByClassName('dragImg').length; ++i){
        this.dragImages.push(document.body.getElementsByClassName('dragImg')[i]);
      }
      for(let i = 0; i < this.gameTable.nativeElement.children[0].children.length; i++){
        var tempArr = [];
        for(let k = 0; k < this.gameTable.nativeElement.children[0].children[i].children.length; k++){
          tempArr.push(this.gameTable.nativeElement.children[0].children[i].children[k]);
        }
        this.gameBoard.push(tempArr);
      }
      console.log(this.gameBoard);
      this.loadGameboard();
 
    }

    loadGameboard() {
      this.vocabRemaining = this.vocabFull;
      this.definitionsShown = this.arrayService.selectRandom(this.vocabRemaining, this.numDefinitionsShown);
      var boxes = this.arrayService.selectRandom(this.endBoxes, this.numDefinitionsShown);
      for(let i = 0; i < this.numDefinitionsShown; i++) {
        boxes[i].textContent = this.definitionsShown[i].definition;
      }
      this.activeVocabulary = this.arrayService.selectRandom(this.definitionsShown, 1)[0];
      this.arrayService.selectRandom(this.startBoxes, 1)[0].textContent = this.activeVocabulary.word;

      for(let i = 0; i < this.dragImages.length; i++ ){
        this.dragImages[i].src = this.arrayService.selectRandom(this.pipes, 1);
      }
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    this.draggedImg = ev.target.src;
    this.selectedPipeBox = ev.target;
  }
  
  onDrop(ev) {
    if(ev.target.children.length > 0){
      ev.preventDefault();
      this.renderer.setElementStyle(ev.target.children[0], 'visibility', 'visible');
      ev.target.children[0].src = this.draggedImg;
      ev.target.children[0].draggable = false;
    }
    else {
      ev.target.src = this.draggedImg;
    }
    this.selectedPipeBox.src = this.arrayService.selectRandom(this.pipes, 1);
    this.checkWin();
  }

  checkWin(){
    for(let i = 0; i < this.gameBoard.length; ++i){
      console.log(this.gameBoard[i][1]);
    }
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
