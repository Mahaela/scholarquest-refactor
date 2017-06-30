import { Component, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';

import { ArrayService } from '../../../shared/utils/array.service';
import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';
import { VocabularyService } from '../vocabulary/vocabulary.service';
import { ApiService } from '../../../shared/utils/api.service';

@Component({
  selector: 'sq-word-pipes',
  templateUrl: './word-pipes.component.html',
  styleUrls: ['./word-pipes.component.css']
})
export class WordPipesComponent implements AfterViewInit{

  @ViewChild('gameTable') gameTable;
  @ViewChild('endGameDialog') endGameDialog: EndGameDialogComponent;

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
  private draggedNum: number;
  private selectedPipeBox: any;
  private gameBoard = [];
  private pipes = [ 
   { img: require('../../../assets/games/word-pipes/one_bottom_left.jpg'), connectors: ['bottom', 'left'] },
   { img: require('../../../assets/games/word-pipes/one_bottom_right.jpg'), connectors: ['bottom', 'right'] },
   { img: require('../../../assets/games/word-pipes/one_top_left.jpg'), connectors: ['top', 'left'] },
   { img: require('../../../assets/games/word-pipes/one_top_right.jpg'), connectors: ['top', 'right'] },
   { img: require('../../../assets/games/word-pipes/one_top_bottom.jpg'), connectors: ['bottom', 'top'] },
   { img: require('../../../assets/games/word-pipes/one_left_right.jpg'), connectors: ['right', 'left'] }
  ]
 
  //  require('../../../assets/games/word-pipes/two_v_bottom_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_v_bottom_right.jpg'),
  //  require('../../../assets/games/word-pipes/two_v_top_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_v_top_right.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_bottom_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_bottom_right.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_top_left.jpg'),
  //  require('../../../assets/games/word-pipes/two_h_top_right.jpg')
  // ]
  constructor( private renderer: Renderer, private arrayService: ArrayService, private vocabularyService: VocabularyService, private apiService: ApiService ){
    // get the pipes to be displayed in the holding container
    this.getDisplayedParts();
  }

  /**
   * get a reference to all the squares on the board
   */
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
      for(let i = 0; i < this.gameTable.nativeElement.children[0].children[0].children.length; i++){
        var tempArr = [];
        for(let k = 0; k < this.gameTable.nativeElement.children[0].children.length; k++){
          tempArr.push({element: this.gameTable.nativeElement.children[0].children[k].children[i], connectors: []});
        }
        this.gameBoard.push(tempArr);
      }
      this.loadGameboard();
    }

    /**
     * get the game board ready
     */
    loadGameboard() {
      this.vocabRemaining = this.vocabFull;

      // get random definitions, including the definition for the active vocabulary, and disply it in random spots
      this.definitionsShown = this.arrayService.selectRandom(this.vocabRemaining, this.numDefinitionsShown);
      var boxes = this.arrayService.selectRandom(this.endBoxes, this.numDefinitionsShown);
      for(let i = 0; i < this.numDefinitionsShown; i++) {
        boxes[i].textContent = this.definitionsShown[i].definition;
      }

      // pick a word to be the active vocabulary word
      this.activeVocabulary = this.arrayService.selectRandom(this.definitionsShown, 1)[0];
      this.arrayService.selectRandom(this.startBoxes, 1)[0].textContent = this.activeVocabulary.word;
    }
    
    getDisplayedParts(){
      var tempPipes = this.pipes.slice();
      var tempPipes2 = this.pipes.slice();
      this.dragImages = [];

      // make sure there is a pipe starting out that can connect to the word
      while(this.dragImages.length < 1){
        
        // randomly select pipes until one with a left connectr is found
        var index = Math.floor(Math.random() * tempPipes.length);
        var tempPipe = tempPipes.splice(index, 1)[0];
        tempPipe.connectors.forEach(con =>{
         if(con == 'left'){
           this.dragImages.push(tempPipe);
           tempPipes2.splice(index, 1);
         }

       })
      }

      // add two more different pipes
       this.dragImages.push.apply(this.dragImages, this.arrayService.selectRandom(tempPipes2, 2));
    }

    /**
     * allow droping the pipes in the game squares
     * @param ev 
     */
  allowDrop(ev) {
    ev.preventDefault();
  }

    /**
     * allow dragging the pipes
     * @param ev 
     */
  drag(ev, num) {
    this.draggedNum = num;
  }
  
  /**
     * allow dropping the pipes in the game squares
     * @param ev 
     */
  onDrop(ev, column, row) {

    // if the game square does not have a pipe yet add the pipe
    if(ev.target.children.length > 0){
      ev.preventDefault();

      // change the img to visible
      this.renderer.setElementStyle(ev.target.children[0], 'visibility', 'visible');

      // change the image of the game square to the pipe
      ev.target.children[0].src = this.dragImages[this.draggedNum].img;
      ev.target.children[0].draggable = false;
    }

    // if the game square already has a pipe, replace it
    else {

      // change the background image of the pipe
      ev.target.src = this.dragImages[this.draggedNum].img;
    }

    // add the connectors to the corresponding location in the gamebord so they can be used later
    this.gameBoard[column][row].connectors = this.dragImages[this.draggedNum].connectors;

    // this.dragImages[this.draggedNum] = this.arrayService.selectRandom(this.pipes,1)[0];
    this.getNewDragImage()
    this.checkWin();
  }

 /**
  * get a new pipe in the container area to replace the pipe that was dropped onto the game board
  */
  getNewDragImage(){
    var tempPipes = this.pipes.slice();

    // dont get a new pipe that is already a pipe in the container area
    for(let i = 0; i < this.dragImages.length; ++i){
      for(let k = 0; k < tempPipes.length; k++){
        if(this.dragImages[i].img == tempPipes[k].img){
          tempPipes.splice(k,1);
          break;
        }
      }
    }

    // get a new pipe for the container
    this.dragImages[this.draggedNum] = this.arrayService.selectRandom(tempPipes, 1)[0];
  }

 /**
  * check to see if the player has won the game
  */
  checkWin(){
    var curSquare = { column: 1, row: 0 };

    // first need to connect a left piece
    var nextToConnect = 'left';
    var cont = true;

    // find the square with the word
    for(let i = 0; i < this.gameBoard[0].length; ++i) {
      if(this.gameBoard[1][i].element.textContent) curSquare.row = i;
    }
    
    while(cont){
      cont = false;

      // get the position the next pipe should be at
      switch (nextToConnect)
      {
        case 'left':
          curSquare.column = curSquare.column + 1;
          break;
        case 'right':
          curSquare.column = curSquare.column -1;
          break;
        case 'top':
          curSquare.row = curSquare.row + 1;
          break;
         case 'bottom':
          curSquare.row = curSquare.row - 1;
          break;
      }

      if(this.canContinueCheckingForWin(curSquare)){
        // check to see if the next pipe connects
        for(let i = 0; i < this.gameBoard[curSquare.column][curSquare.row].connectors.length; i++){
          if( this.gameBoard[curSquare.column][curSquare.row].connectors[i] == nextToConnect) {
            cont = true;

            // get the connector the next pipe should have
            var otherConnector = (i == 0 ? this.gameBoard[curSquare.column][curSquare.row].connectors[1] : this.gameBoard[curSquare.column][curSquare.row].connectors[0]);
            switch (otherConnector)
            {
              case 'left':
                nextToConnect = 'right';
                break;
              case 'right':
                nextToConnect = 'left';
                break;
              case 'top':
                nextToConnect = 'bottom';
                break;
              case 'bottom':
                nextToConnect = 'top';
                break;
            }
          }
        }
      }
    }
  }
  
  /**
   * check to see if the game is won or the pipe is not completed 
   * @param curSquare 
   */
    canContinueCheckingForWin(curSquare){

      // the game is won
      if(curSquare.column == this.gameBoard.length - 1 && this.endBoxes[curSquare.row].textContent == this.activeVocabulary.definition){
        this.apiService.addCoins(100);
        this.endGameDialog.openWinDialog();
      }

      // check to see if there is a pipe at the square being examined
      if(curSquare.row >= 0 && curSquare.row < this.gameBoard[0].length){
         if(curSquare.column >= 0 && curSquare.column < this.gameBoard.length - 1){
          if(this.gameBoard[curSquare.column][curSquare.row].connectors.length > 0){
            return true;
          }
        }
      }
      return false;
    }

  /*
 * change the vocabulary when a new word is selected
 */
 changeGradeLevel(event){
  
    switch(event) { 
        case 2: { 
            this.vocabFull = this.vocabularyService.getVocabularySecond(); 
            break; 
        }
        case 3: { 
            this.vocabFull  = this.vocabularyService.getVocabularyThird();
            break; 
        }
        case 4: { 
            this.vocabFull  = this.vocabularyService.getVocabularyFourth(); 
            break; 
        }
        case 5: { 
            this.vocabFull  = this.vocabularyService.getVocabularyFifth(); 
            break; 
        }
        case 6: { 
            this.vocabFull  = this.vocabularyService.getVocabularySixth();
            break; 
        } 
        default: { 
            this.vocabFull  = this.vocabularyService.getVocabularyFirst();
            break; 
        } 
    }
    this.reload(); 
  }
  
  reload(){

    // clear the definitions
     for(var i = 0; i < this.endBoxes.length; ++i){
        this.endBoxes[i].textContent = '';
      }

      // clear the word
      for(var i = 0; i < this.startBoxes.length; ++i){
        this.startBoxes[i].textContent = '';
      }

      // clear the pipes
      for(let i = 1; i< this.gameBoard.length; i++){
        for(let k = 0; k < this.gameBoard[i].length; k++){
          if(this.gameBoard[i][k].element.children[0].children.length > 0) this.gameBoard[i][k].element.children[0].children[0].src = '';
          this.gameBoard[i][k].connectors = []; 
        }
      }
      
      // get new pipes for the container
      this.getDisplayedParts();

      // reload the game board
      this.loadGameboard();
  }
}
