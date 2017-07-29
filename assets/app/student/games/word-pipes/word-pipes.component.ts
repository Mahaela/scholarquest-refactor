import { Component, ElementRef, ViewChild, Renderer, AfterViewInit, trigger, style, state, transition, animate, keyframes } from '@angular/core';

import { ArrayService } from '../../../shared/utils/array.service';
// import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';
import { VocabularyService } from '../game/vocabulary/vocabulary.service';
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
        ]),
         trigger('spill', [
          state('normal', style({ 'width': '20px', 'height': '20px' })),
          state('spilled', style({ 'width': '300px', 'height': '150px' })),
          transition('normal => spilled', animate('4s ease-out')),
      ]
  
})
export class WordPipesComponent implements AfterViewInit{

  @ViewChild('gameTable') gameTable;
  // @ViewChild('endGameDialog') endGameDialog: EndGameDialogComponent;
  private spillState = 'normal';

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
  private cornerFullImg1 = require('../../../assets/games/word-pipes/corner_full1.png');
  private cornerFullImg2 = require('../../../assets/games/word-pipes/corner_full2.png');
  private cornerFullImg3 = require('../../../assets/games/word-pipes/corner_full3.png');
  private cornerFullImg4 = require('../../../assets/games/word-pipes/corner_full4.png');
  private straightFullImg1 = require('../../../assets/games/word-pipes/straight_full1.png');
  private straightFullImg2 = require('../../../assets/games/word-pipes/straight_full2.png');
  private endUnderImg = require('../../../assets/games/word-pipes/end_pipe_under.png');
  private endOuterImg = require('../../../assets/games/word-pipes/end_pipe_outer.png');
  private waterSpill = require('../../../assets/games/word-pipes/waterSpill.png');
  private terrains = [ require('../../../assets/games/word-pipes/terrain_1.jpg'), require('../../../assets/games/word-pipes/terrain_2.jpg'), require('../../../assets/games/word-pipes/terrain_3.jpg'), require('../../../assets/games/word-pipes/terrain_4.jpg'), require('../../../assets/games/word-pipes/terrain_5.jpg') ] ;
  private terrainsGrass = [ require('../../../assets/games/word-pipes/terrain_grass_1.jpg'), require('../../../assets/games/word-pipes/terrain_grass_2.jpg'), require('../../../assets/games/word-pipes/terrain_grass_3.jpg')]
  private rotations = [ 'rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)'];
  private rocks = [ require('../../../assets/games/word-pipes/rock1.png'), require('../../../assets/games/word-pipes/rock2.png'), require('../../../assets/games/word-pipes/rock3.png')];
  private recycleIsAnimating = false;
  private gameTableRows = Array(6);
  private gameTableData = Array(5);
  private shakeState ='normal';
  private hoveringOnRecycle = false;
  private lastShakeState = 'left';
  private waterInterval;
  private startPipe;
  private waterWidth = 0;
  private waterDirection = 'right';
  private waterPipeLocation = {row: 0, column: 1} 
  private nextWaterDirection;
  private waterMaxDistance = 50;
  private waterCurDistance = 0;
  private startColumn = 1;
  private endColumn = 7;
  private waterSpeed = 1000;
  private gameDone = false;
  private defaultPipeFittingClass = 'pipeFitting';
  private rockSquares = [];
  
  private pipes = [ 
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, fullImg: this.cornerFullImg4, connectors: ['down', 'left'], pipeRotation: 'rotate(270deg)', fittingsClasses: ['pipeFittingDown', 'pipeFittingLeft'] },
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, fullImg: this.cornerFullImg3, connectors: ['down', 'right'], pipeRotation: 'rotate(180deg)', fittingsClasses: ['pipeFittingDown', 'pipeFittingRight'] },
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, fullImg: this.cornerFullImg1, connectors: ['up', 'left'], pipeRotation: 'rotate(0deg)', fittingsClasses: ['pipeFittingUp', 'pipeFittingLeft'] },
   { outerImg: this.cornerOuterImg, underImg: this.cornerUnderImg, fullImg: this.cornerFullImg2, connectors: ['up', 'right'], pipeRotation: 'rotate(90deg)', fittingsClasses: ['pipeFittingUp', 'pipeFittingRight'] },
   { outerImg: this.straightOuterImg, underImg: this.straightUnderImg, fullImg: this.straightFullImg2, connectors: ['down', 'up'], pipeRotation: 'rotate(90deg)', fittingsClasses: ['pipeFittingDown', 'pipeFittingUp'] },
   { outerImg: this.straightOuterImg, underImg: this.straightUnderImg, fullImg: this.straightFullImg1, connectors: ['right', 'left'], pipeRotation: 'rotate(0deg)', fittingsClasses: ['pipeFittingRight', 'pipeFittingLeft'] }
  ]
 
   constructor( private renderer: Renderer, private arrayService: ArrayService, private vocabularyService: VocabularyService, private apiService: ApiService ){
    // get the pipes to be displayed in the holding container
    this.initPipesInHoldingBoxes();

    for(let i = 0; i < this.gameTableData.length + 3; i++){
       var tempArr = [];
      for(let k = 0; k < this.gameTableRows.length; k++){
        if(k == 0) tempArr.push({connectors: [], piperotation: '', terrain: _.sample(this.terrainsGrass)});
        else  tempArr.push({connectors: [], piperotation: '', terrain: _.sample(this.terrains)});
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

      // column
      for(let i = 0; i < this.gameTable.nativeElement.children[0].children[0].children.length; i++){
        //row
        for(let k = 0; k < this.gameTable.nativeElement.children[0].children.length; k++){
           this.gameBoard[i][k].element = this.gameTable.nativeElement.children[0].children[k].children[i];
           var childElemWithWater;
           if(this.gameBoard[i][k].element.children.length > 1) childElemWithWater = _.find(this.gameBoard[i][k].element.children, function(e) { return e.className.includes('Pipe');})
           else childElemWithWater = this.gameBoard[i][k].element.children[0];

           this.gameBoard[i][k].water = _.filter(childElemWithWater.children, function(e){return e.className.includes('water')}));
           if (_.find(childElemWithWater.children, function(e){return e.className.includes('pipeFitting')})){
            this.gameBoard[i][k].fittings =_.filter(childElemWithWater.children, function(e){return e.className.includes('pipeFitting')});
           }
           if (_.find(childElemWithWater.children, function(e){return e.className.includes('rock')})){ 
            this.gameBoard[i][k].rock =_.find(childElemWithWater.children, function(e){return e.className.includes('rock')});
            this.rockSquares.push(this.gameBoard[i][k].rock);
           }
           if (_.find(childElemWithWater.children, function(e){return e.className.includes('outerPipe')})){ 
            this.gameBoard[i][k].outerPipe =_.find(childElemWithWater.children, function(e){return e.className.includes('outerPipe')});
           }
            if (_.find(childElemWithWater.children, function(e){return e.className.includes('underPipe')})){ 
            this.gameBoard[i][k].underPipe =_.find(childElemWithWater.children, function(e){return e.className.includes('underPipe')});
           }
          }
        }
      this.loadGameboard();
      this.startWater();
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
        boxes[i].children[0].textContent = this.definitionsShown[i].definition;
        boxes[i].parentElement.children[0].children[0].src = this.endUnderImg;
        this.renderer.setElementStyle(boxes[i].parentElement.children[0].children[0], 'visibility', 'visible');
        boxes[i].parentElement.children[0].children[2].src = this.endOuterImg;
        this.renderer.setElementStyle(boxes[i].parentElement.children[0].children[2], 'visibility', 'visible');
      }

      // pick a word to be the active vocabulary word
      var startWordIndex = Math.floor(Math.random() * this.gameTableRows.length);
      this.activeVocabulary = this.arrayService.selectRandom(this.definitionsShown, 1)[0];
      this.startBoxes[startWordIndex].children[0].textContent = this.activeVocabulary.word;
      this.startBoxes[startWordIndex].parentElement.children[1].children[0].src = this.endUnderImg;
      this.renderer.setElementStyle(this.startBoxes[startWordIndex].parentElement.children[1].children[0], 'visibility', 'visible');
      this.startBoxes[startWordIndex].parentElement.children[1].children[2].src = this.endOuterImg;
      this.renderer.setElementStyle(this.startBoxes[startWordIndex].parentElement.children[1].children[2], 'visibility', 'visible');
      this.waterPipeLocation.row = startWordIndex;

        // console.log(this.rockSquares);
      var rockTiles = _.sampleSize(this.rockSquares, 3)
      rockTiles.forEach(rockTile => {
        rockTile.src = _.sample(this.rocks);
        this.renderer.setElementStyle(rockTile, 'visibility', 'visible');
        // console.log(rockTile.style);
      })

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
    this.renderer.setElementStyle(ev.srcElement, 'background-color', '');

    for(let i = 0; i < 5; i++){
       this.renderer.setElementStyle(ev.path[i], 'background-color', '');
    }
    this.draggedNum = num;
  }
  
  /**
     * allow dropping the pipes in the game squares
     * @param ev 
     */
  onDrop(ev, column, row) {
    console.log(ev);
    if(this.gameBoard[column][row].rock && this.gameBoard[column][row].rock.style.visibility) return;

    if(this.gameBoard[column][row].water[0].style.visibility == 'visible') return;

    // if the game square does not have a pipe yet add the pipe
    ev.preventDefault();
    if(this.gameBoard[column][row].connectors.length > 0) this.resetPipeFittings(column, row);
    // change the under and outer pipe of the tile 
    this.gameBoard[column][row].underPipe.src = this.pipesInHoldingBoxes[this.draggedNum].underImg;
    this.gameBoard[column][row].outerPipe.src = this.pipesInHoldingBoxes[this.draggedNum].outerImg;

    // change the pipe to visible
    this.renderer.setElementStyle(this.gameBoard[column][row].underPipe, 'visibility', 'visible');
    this.renderer.setElementStyle(this.gameBoard[column][row].outerPipe, 'visibility', 'visible');

    // add the connectors to the corresponding location in the gamebord so they can be used later
    this.gameBoard[column][row].connectors = this.pipesInHoldingBoxes[this.draggedNum].connectors;
    this.gameBoard[column][row].pipeRotation = this.pipesInHoldingBoxes[this.draggedNum].pipeRotation;
    this.gameBoard[column][row].fittingsClasses = this.pipesInHoldingBoxes[this.draggedNum].fittingsClasses;
    
    
    // get a new pipe for the container
    this.pipesInHoldingBoxes[this.draggedNum] = _.sample(_.difference(this.pipes, this.pipesInHoldingBoxes));

    this.renderer.setElementStyle(this.gameBoard[column][row].element, 'background-color', '');

    this.setPipeFittings(column, row)
    
  }

  resetPipeFittings(column, row){
    for(let i = 0; i < this.gameBoard[column][row].fittings.length; i++){
      this.renderer.setElementClass(this.gameBoard[column][row].fittings[i], this.gameBoard[column][row].fittingsClasses[i], false);
      this.renderer.setElementClass(this.gameBoard[column][row].fittings[i], this.defaultPipeFittingClass, true);
      
    }
    this.gameBoard[column][row].connectors.forEach(connector => {
      switch (connector) {
        case 'up':
          if(row == 0 || this.gameBoard[column][row -1].connectors.length == 0 || !_.find(this.gameBoard[column][row - 1].fittings, {className: 'pipeFittingDown'})) return;
          console.log('resetting up');
          var i = _.findIndex(this.gameBoard[column][row - 1].fittings, {className: 'pipeFittingDown'});
          this.resetPipeFitting(i, column, row - 1);
          
          break;
        case 'down':
          if(row == this.gameTableRows.length - 1 || this.gameBoard[column][row + 1].connectors.length == 0 || !_.find(this.gameBoard[column][row + 1].fittings, {className: 'pipeFittingUp'})) return;
          
          var i = _.findIndex(this.gameBoard[column][row + 1].fittings, {className: 'pipeFittingUp'});
          console.log('resetting down');
          
          this.resetPipeFitting(i, column, row + 1);
          break;
        case 'left':
          if(column == 2 ||this.gameBoard[column - 1][row].connectors.length == 0 || !_.find(this.gameBoard[column - 1][row].fittings, {className: 'pipeFittingRight'})) return;
          console.log('resetting left');
          
          var i = _.findIndex(this.gameBoard[column - 1][row].fittings, {className: 'pipeFittingRight'});
          this.resetPipeFitting(i, column - 1, row);
          break;
        case 'right':
          if(column == this.endColumn - 1 || this.gameBoard[column + 1][row].connectors.length == 0 || !_.find(this.gameBoard[column  + 1][row].fittings, {className: 'pipeFittingLeft'})) return;
          console.log('resetting right');
          
          var i = _.findIndex(this.gameBoard[column + 1][row].fittings, {className: 'pipeFittingLeft'});
          this.resetPipeFitting(i, column + 1, row);
          break;
      }
      
    })
  }

  resetPipeFitting( i, column, row ){
  
      this.renderer.setElementClass(this.gameBoard[column][row].fittings[i], this.gameBoard[column][row].fittingsClasses, false);
      this.renderer.setElementClass(this.gameBoard[column][row].fittings[i], this.defaultPipeFittingClass, true);
  }
  
  setPipeFittings(column, row){
    for(let i = 0; i < this.gameBoard[column][row].connectors.length; i++){
      var connector =  this.gameBoard[column][row].connectors[i];
      
      var waterIndex = i;
  
      switch (connector) {
        case 'up':
    
          if(row == 0 || this.gameBoard[column][row -1].connectors.length == 0 || !_.includes(this.gameBoard[column][row - 1].connectors, 'down')) break;
          this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.defaultPipeFittingClass, false);
          this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.gameBoard[column][row].fittingsClasses[waterIndex], true);
          break;
        case 'down':
          if(row == this.gameTableRows.length - 1 || this.gameBoard[column][row + 1].connectors.length == 0 || !_.includes(this.gameBoard[column][row + 1].connectors, 'up')) break;
                  this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.defaultPipeFittingClass, false);
          this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.gameBoard[column][row].fittingsClasses[waterIndex], true);
          break;
        case 'left':
          if(column == 2){
            if(this.gameBoard[column - 1][row].element.children[1].children[0].style.visibility) {
          this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.defaultPipeFittingClass, false);
          this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.gameBoard[column][row].fittingsClasses[waterIndex], true);
            }
            return;
          } 
          if(this.gameBoard[column - 1][row].connectors.length == 0 || !_.includes(this.gameBoard[column - 1][row].connectors, 'right')) break;
                   this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.defaultPipeFittingClass, false);
          this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.gameBoard[column][row].fittingsClasses[waterIndex], true);
          
          break;
        case 'right':
     
          if((column == this.endColumn - 1 && this.gameBoard[column + 1][row].element.children[0].children[0].style.visibility) || this.gameBoard[column + 1][row].connectors.length > 0 && _.includes(this.gameBoard[column + 1][row].connectors, 'left')){
                   this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.defaultPipeFittingClass, false);
          this.renderer.setElementClass(this.gameBoard[column][row].fittings[waterIndex], this.gameBoard[column][row].fittingsClasses[waterIndex], true);
          } 
          break;
      }
    }
        
  }

  /**
   * 
   */
  startWater(){
    this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'visibility', 'visible');
    this.setWaterAnimation();
  }

  setWaterAnimation(){
    this.waterInterval = setInterval(x => {
      var reverseTest;

      this.waterCurDistance +=  5;
      var waterIndex = 0;
   
      if(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water.length > 1 &&  this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1].style.visibility == 'visible') waterIndex = 1;
      waterIndex == 1 ? reverseTest = 30 : reverseTest = 100;
      switch (this.waterDirection) {
        case 'up':
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[waterIndex], 'height', this.waterCurDistance + 'px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[waterIndex], 'margin-top', (reverseTest - this.waterCurDistance) + 'px');
          
        break;
        case 'down':
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[waterIndex], 'height', this.waterCurDistance + 'px');
        break;
        case 'left':
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[waterIndex], 'width', this.waterCurDistance + 'px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[waterIndex], 'margin-left', (reverseTest - this.waterCurDistance) + 'px');
        break;
        case 'right':
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[waterIndex], 'width', this.waterCurDistance + 'px');
        break;
      }
      
      if(this.waterCurDistance >= this.waterMaxDistance){
          clearInterval(this.waterInterval);
        this.getNextWaterPipe();
      
      }
     }, this.waterSpeed);
  }

  getNextWaterPipe(){
    if(this.nextWaterDirection){
      this.waterDirection = this.nextWaterDirection;
      this.nextWaterDirection = '';
      this.waterCurDistance = 0;
      this.waterMaxDistance = 30;

      switch (this.waterDirection) {
        case 'up':
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'margin-top', '30px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'margin-left', '30px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'height', '1px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'width', '40px');
        break;
        case 'down':
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'margin-top', '70px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'margin-left', '30px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'height', '1px');
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'width', '40px');
   
        break;
        case 'left':
          this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'margin-left', '30px');
        break;
        case 'right':
        this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'margin-left', '70px');
        break;
      }
             this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'visibility', 'visible');

    }
    else {
      this.waterCurDistance = 0;
      switch (this.waterDirection) {
          case 'up':
           this.waterPipeLocation.row -= 1;
           if(this.waterPipeLocation.row  < 0 || this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, 'down')){
            this.loseGame();
            return;
           }
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-top', '100px');
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'width', '40px');
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'height', '1px');
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-left', '30px');
            if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['down'])[0] == 'up'){
              this.waterMaxDistance = 100;
            }
            else{
              this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['down'])[0];
              this.waterMaxDistance = 65;
            } 
          break;
          case 'down':
            this.waterPipeLocation.row += 1;
            if(this.waterPipeLocation.row == this.gameTableRows.length || this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, 'up')){
              this.loseGame();
              return;
            }
              this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-top', '0px');
              this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'width', '40px');
              this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'height', '1px');
              this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-left', '30px');
              if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['up'])[0] == 'down'){
                this.waterMaxDistance = 100;
              }
              else{
                this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['up'])[0];
                this.waterMaxDistance = 65;
              }
            break;
          case 'left':
            this.waterPipeLocation.column -= 1;
            if(this.waterPipeLocation.column < 1 || this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, 'right')){
              this.loseGame();
              return;
            }
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-left', '100px');
            if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['right'])[0] == 'left'){
              this.waterMaxDistance = 100;
            }
            else{
              this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['right'])[0];
              this.waterMaxDistance = 65;
            }
          break;
          case 'right':
            this.waterPipeLocation.column += 1;
            if(this.waterPipeLocation.column == this.gameTableData.length + 3){
              
              if(this.checkForWin()){
                this.winGame()
              }
              else {
                this.loseGame();
              }
              return;
            }
            if(
                (this.waterPipeLocation.column < this.gameTableData.length + 2 && (this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, 'left'))) ||
                (this.waterPipeLocation.column == this.gameTableData.length + 2 && this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].element.children[0].children[0].style.visibility != 'visible' )
              ){
              this.loseGame();
              return;
            }
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-left', '0px');
            if(this.waterPipeLocation.column == this.gameTableData.length + 2){
                this.waterMaxDistance = 50;
            }
            else if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['left'])[0] == 'right'){
              this.waterMaxDistance = 100;
            }
            else{
              this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['left'])[0];
              this.waterMaxDistance = 65;
            }
          break;
        }
     }
      this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'visibility', 'visible');
      this.setWaterAnimation();
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

  highlightGameboardTile(event, column, row){
    if((this.gameBoard[column][row].rock && this.gameBoard[column][row].rock.style.visibility == 'visible') || _.find(this.gameBoard[column][row].water, function(water){ console.log(water); return water.style.visibility == 'visible'})) return;
      this.renderer.setElementStyle(this.gameBoard[column][row].element, 'background-color', 'purple');
  }

  unhighlightGameBoardTile(event, column, row){
      this.renderer.setElementStyle(this.gameBoard[column][row].element, 'background-color', '');
  }

  shakeRecycle(event){
   this.spillState = 'spilled';
    
    if(this.recycleIsAnimating) return; 
    this.shakeState = 'left';
    this.hoveringOnRecycle = true;
    this.recycleIsAnimating = true;
  }

  doneWithShake(event){
    if(this.shakeState == 'normal' && !this.hoveringOnRecycle){
      this.recycleIsAnimating = false;
      return;
    }
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

  loseGame(){
    console.log(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row]);
    this.gameDone = true;

    // console.log('lose game');
  }

  checkForWin(){
    if(this.gameBoard[this.waterPipeLocation.column - 1][this.waterPipeLocation.row ].element.children[1].textContent.trim() == this.activeVocabulary.definition){
      return true;
    }
    return false;
  }

  winGame(){
    this.gameDone = true;
    console.log('the game is won');
  }
  speedUpWater() {
    if(this.gameDone) return;
    clearInterval(this.waterInterval);
    this.waterSpeed /= 5;
    this.setWaterAnimation();
  }
}
