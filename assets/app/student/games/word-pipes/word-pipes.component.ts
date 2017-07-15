import { Component, ElementRef, ViewChild, Renderer, AfterViewInit, trigger, style, state, transition, animate, keyframes } from '@angular/core';

import { ArrayService } from '../../../shared/utils/array.service';
import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';
import { VocabularyService } from '../vocabulary/vocabulary.service';
import { ApiService } from '../../../shared/utils/api.service';
import * as _ from "lodash"

@Component({
  selector: 'sq-word-pipes',
  templateUrl: './word-pipes.component.html',
  styleUrls: ['./word-pipes.component.css'],
    animations: [
      trigger('shake', [
          state('left', style({ 'transform': 'rotate(30deg)' })),
          state('right', style({ 'transform': 'rotate(-30deg)' })),
          state('normal', style({ 'transform': 'rotate(0deg)' })),
          transition('normal => left', animate('250ms ease-in')),
          transition('normal => right', animate('250ms ease-in')),
          transition('* => normal', animate('250ms ease-out'))
        ])
      ]
  
})
export class WordPipesComponent implements AfterViewInit{

  @ViewChild('gameTable') gameTable;
  @ViewChild('endGameDialog') endGameDialog: EndGameDialogComponent;

  private vocabFull = [];
  private vocabRemaining = [];
  private finishBoxes = [];
  private definitionsShown = [];
  private numDefinitionsShown = 3;
  private activeVocabulary: any;
  private startBoxes = [];
  private numParts = 3;
  private pipesInHoldingBoxes = [];
  private holdingBoxes = []
  private draggedNum: number;
  private selectedPipeBox: any;
  private gameBoard = [];
  private cornerOuterImg = require('../../../assets/games/word-pipes/corner_outer.png');
  private cornerUnderImg = require('../../../assets/games/word-pipes/corner_under.png');
  private straightOuterImg = require('../../../assets/games/word-pipes/straight_outer.png');
  private straightUnderImg = require('../../../assets/games/word-pipes/straight_under.png');
  private terrains = [ require('../../../assets/games/word-pipes/terrain_1.jpg'), require('../../../assets/games/word-pipes/terrain_2.jpg'), require('../../../assets/games/word-pipes/terrain_3.jpg') ] ;
  private rotations = [ 'rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)'];
  private waterBlockImg = require('../../../assets/games/word-pipes/water_block.jpg');
  private gameTableRows = Array(6);
  private gameTableData = Array(5);
  private shakeState ='normal';
  private hoveringOnRecycle = false;
  private lastShakeState = 'left';
  
  private pipes = [ 
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, connectors: ['bottom', 'left'], pipeRotation: 'rotate(270deg)' },
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, connectors: ['bottom', 'right'], pipeRotation: 'rotate(180deg)' },
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, connectors: ['top', 'left'], pipeRotation: 'rotate(0deg)' },
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, connectors: ['top', 'right'], pipeRotation: 'rotate(90deg)' },
   { outerImg: this.straightOuterImg, underImg: this.straightUnderImg, connectors: ['bottom', 'top'], pipeRotation: 'rotate(90deg)' },
   { outerImg: this.straightOuterImg, underImg: this.straightUnderImg, connectors: ['right', 'left'], pipeRotation: 'rotate(0deg)' }
  ]
 
   constructor( private renderer: Renderer, private arrayService: ArrayService, private vocabularyService: VocabularyService, private apiService: ApiService ){
    // get the pipes to be displayed in the holding container
    this.initPipesInHoldingBoxes();
    for(let i = 0; i < this.gameTableData.length + 3; i++){
       var tempArr = [];

      for(let k = 0; k < this.gameTableRows.length; k++){
        tempArr.push({connectors: [], piperotation: '', terrain: _.sample(this.terrains), terrainRotation: _.sample(this.rotations)});
      }
      this.gameBoard.push(tempArr);
    }
  }

  /**
   * get a reference to all the squares on the board
   */
    ngAfterViewInit() {     
      this.vocabFull = this.vocabularyService.getVocabularyFirst();
      for(var i = 0; i < document.body.getElementsByClassName('finishBox').length; ++i){
        this.finishBoxes.push(document.body.getElementsByClassName('finishBox')[i]);
      }
      for(var i = 0; i < document.body.getElementsByClassName('startBox').length; ++i){
        this.startBoxes.push(document.body.getElementsByClassName('startBox')[i]);
      }
      for(var i = 0; i < document.body.getElementsByClassName('holdingBox').length; ++i){
        this.holdingBoxes.push(document.body.getElementsByClassName('holdingBox')[i]);
      }
      for(let i = 0; i < this.gameTable.nativeElement.children[0].children[0].children.length; i++){
        for(let k = 0; k < this.gameTable.nativeElement.children[0].children.length; k++){

          this.gameBoard[i][k].element = this.gameTable.nativeElement.children[0].children[k].children[i];
        }
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
      var boxes = this.arrayService.selectRandom(this.finishBoxes, this.numDefinitionsShown);
      for(let i = 0; i < this.numDefinitionsShown; i++) {
        boxes[i].textContent = this.definitionsShown[i].definition;
      }

      // pick a word to be the active vocabulary word
      this.activeVocabulary = this.arrayService.selectRandom(this.definitionsShown, 1)[0];
      this.arrayService.selectRandom(this.startBoxes, 1)[0].textContent = this.activeVocabulary.word;
    }
    
    initPipesInHoldingBoxes(){

      this.pipesInHoldingBoxes = [];
      let pipesWithLeftConnectors = [];

      this.pipes.forEach(pipe =>{
        if( _.includes(pipe.connectors, 'left')) pipesWithLeftConnectors.push(pipe);
      })

      var leftPipe = [_.sample(pipesWithLeftConnectors)];

      this.pipesInHoldingBoxes = leftPipe.concat(_.sampleSize(_.difference(this.pipes, leftPipe), 2));
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
    ev.preventDefault();

    // change the under and outer pipe of the tile 
    ev.path[1].children[1].src = this.pipesInHoldingBoxes[this.draggedNum].underImg;
    ev.path[1].children[4].src = this.pipesInHoldingBoxes[this.draggedNum].outerImg;

    // change the pipe to visible
    this.renderer.setElementStyle(ev.path[1].children[1], 'visibility', 'visible');
    this.renderer.setElementStyle(ev.path[1].children[4], 'visibility', 'visible');

    // add the connectors to the corresponding location in the gamebord so they can be used later
    this.gameBoard[column][row].connectors = this.pipesInHoldingBoxes[this.draggedNum].connectors;
    this.gameBoard[column][row].pipeRotation = this.pipesInHoldingBoxes[this.draggedNum].pipeRotation;
    
    // get a new pipe for the container
    this.pipesInHoldingBoxes[this.draggedNum] = _.sample(_.difference(this.pipes, this.pipesInHoldingBoxes));

    this.renderer.setElementStyle(ev.path[2], 'background-color', '');
    
    this.checkWin();
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
      if(curSquare.column == this.gameBoard.length - 1 && this.finishBoxes[curSquare.row].textContent == this.activeVocabulary.definition){
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
     for(var i = 0; i < this.finishBoxes.length; ++i){
        this.finishBoxes[i].textContent = '';
      }

      // clear the word
      for(var i = 0; i < this.startBoxes.length; ++i){
        this.startBoxes[i].textContent = '';
      }

      // clear the pipes
      for(let i = 1; i< this.gameBoard.length; i++){
        for(let k = 0; k < this.gameBoard[i].length; k++){
          this.gameBoard[i][k].connectors = []; 
          this.gameBoard[i][k].pipeRotation = ''; 
        }
      }

      for(var i = 0; i < document.body.getElementsByClassName('underPipe').length; ++i){
       document.body.getElementsByClassName('underPipe')[i].src = '';
       this.renderer.setElementStyle(document.body.getElementsByClassName('underPipe')[i], 'visibility', 'hidden');
      }

       for(var i = 0; i < document.body.getElementsByClassName('outerPipe').length; ++i){
        document.body.getElementsByClassName('outerPipe')[i].src = '';
        this.renderer.setElementStyle(document.body.getElementsByClassName('outerPipe')[i], 'visibility', 'hidden');
      }
      
      // get new pipes for the container
      this.initPipesInHoldingBoxes();

      // reload the game board
      this.loadGameboard();
  }

  highlightGameboardTile(event)
  {
      this.renderer.setElementStyle(event.path[2], 'background-color', 'purple');
  }

  unhighlightGameBoardTile(event){
    this.renderer.setElementStyle(event.path[2], 'background-color', '');
  }

  shakeRecycle(event){
    this.shakeState = 'left';
    this.hoveringOnRecycle = true;
  }

  doneWithShake(event){
    if(this.shakeState != 'normal'){
      this.lastShakeState = this.shakeState; 
      this.shakeState = 'normal';
      return;
    }
    if(this.hoveringOnRecycle){
      this.lastShakeState == 'left' ? this.shakeState = 'right' : this.shakeState = 'left'; 
    }
  }

  recyclePipe(event){
    this.hoveringOnRecycle = false;

    // get a new pipe for the container
    this.pipesInHoldingBoxes[this.draggedNum] = _.sample(_.difference(this.pipes, this.pipesInHoldingBoxes));
  }

  stopShaking(){
    this.hoveringOnRecycle = false;
  }
}
