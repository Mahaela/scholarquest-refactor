import { Component, ElementRef, ViewChild, Renderer, AfterViewInit, trigger, style, state, transition, animate, keyframes, AfterContentInit } from '@angular/core';

import { ArrayService } from '../../../shared/utils/array.service';
import { VocabularyService } from '../game/vocabulary/vocabulary.service';
import { ApiService } from '../../../shared/utils/api.service';

import * as _ from "lodash";

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
          state('normal', style({ 'width': '60px', 'height': '60px' })),
          state('spilled', style({ 'width': '300px', 'height': '150px', 'transform': 'translateY(-60px) translateX(-100px)' })),
          transition('normal => spilled', animate('4s ease-out')),
      ])
    ]
})
export class WordPipesComponent implements AfterViewInit{

  @ViewChild('gameTable') gameTable;
  @ViewChild('game') gameController;
  private spillState = 'normal';

  private vocabFull = [];
  private finishBoxes = [];
  private numDefinitionsShown = 3;
  private activeVocabulary: any;
  private startBoxes = [];
  private numParts = 3;
  private pipesInHoldingBoxes = [];
  private holdingBoxes = []
  private draggedNum: number;
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
  private waterSpillImg = require('../../../assets/games/word-pipes/waterSpill.png');
  private terrains = [ require('../../../assets/games/word-pipes/terrain_1.jpg'), require('../../../assets/games/word-pipes/terrain_2.jpg'), require('../../../assets/games/word-pipes/terrain_3.jpg'), require('../../../assets/games/word-pipes/terrain_4.jpg'), require('../../../assets/games/word-pipes/terrain_5.jpg') ] ;
  private terrainsGrass = [ require('../../../assets/games/word-pipes/terrain_grass_1.jpg'), require('../../../assets/games/word-pipes/terrain_grass_2.jpg'), require('../../../assets/games/word-pipes/terrain_grass_3.jpg')]
  private rotations = [ 'rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)'];
  private rocks = [ require('../../../assets/games/word-pipes/rock1.png'), require('../../../assets/games/word-pipes/rock2.png'), require('../../../assets/games/word-pipes/rock3.png')];
  private bubbles = [ require('../../../assets/games/word-pipes/bubbles_1.png'), require('../../../assets/games/word-pipes/bubbles_2.png'), require('../../../assets/games/word-pipes/bubbles_3.png') ];
  private recycleIsAnimating = false;
  private gameTableRows = Array(6);
  private gameTableData = Array(5);
  private shakeState ='normal';
  private hoveringOnRecycle = false;
  private lastShakeState = 'left';
  public waterDirection = 'right';
  private level = 0;
  private defaultWaterSpeed = 10; 
  private waterPipeLocation = {row: 0, column: 1};
  private nextWaterDirection;
  private endColumn = 7;
  private levelWaterSpeed = 10;
  private gameDone = false;
  private defaultPipeFittingClass = 'pipeFitting';
  private rockSquares = [];
  private waterSpill;
  private waterPipes = [];
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
        if(k == 0) tempArr.push({connectors: [], pipeRotation: '', terrain: _.sample(this.terrainsGrass)});
        else  tempArr.push({connectors: [], pipeRotation: '', terrain: _.sample(this.terrains)});
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

      this.waterSpill = document.body.getElementsByClassName('waterSpill')[0];

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
           if (_.find(childElemWithWater.children, function(e){return e.className.includes('specialEffect')})){ 
            this.gameBoard[i][k].specialEffect =_.find(childElemWithWater.children, function(e){return e.className.includes('specialEffect')});
           }
          }
        }
        this.loadGameboard();

        // prevents the countdown from breaking

        var self = this;
        setTimeout(function(){self.gameController.startCountdown(); }, 1);
      
      }

   
    /**
     * get the game board ready
     */
    loadGameboard() {
      var vocabRemaining = this.vocabFull;

      // for(let i = 1; i< this.gameBoard.length; i++){
      //   for(let k = 0; k < this.gameBoard[i].length; k++){
      //     if (this.gameBoard[i][k].connectors.length > 0){
      //       console.log('connectors');
      //       console.log(this.gameBoard[i][k].connectors[0].className);
      //       console.log(this.gameBoard[i][k].connectors[1].className);
      //     }

      //      if (this.gameBoard[i][k].water.length > 0){
      //       console.log('water');
      //       console.log(this.gameBoard[i][k].water[0].className);
      //       if (this.gameBoard[i][k].water[1]) console.log(this.gameBoard[i][k].water[1].className);
      //      }
      //     console.log(this.gameBoard[i][k]);
      //     console.log(this.gameBoard[i][k].outerPipe.className);
      //     console.log(this.gameBoard[i][k].underPipe.className);
      //     console.log(this.gameBoard[i][k].specialEffect.className);
      //     console.log(this.gameBoard[i][k].pipeFitting);
      //     console.log('____________________');

      //   }
      // }

      // get random definitions, including the definition for the active vocabulary, and disply it in random spots
      var definitionsShown = this.arrayService.selectRandom(vocabRemaining, this.numDefinitionsShown);
      var boxes = this.arrayService.selectRandom(this.finishBoxes, this.numDefinitionsShown);
      for(let i = 0; i < this.numDefinitionsShown; i++) {
        boxes[i].children[0].textContent = definitionsShown[i].definition;
        boxes[i].parentElement.children[0].children[0].src = this.endUnderImg;
        this.renderer.setElementStyle(boxes[i].parentElement.children[0].children[0], 'visibility', 'visible');
        boxes[i].parentElement.children[0].children[3].src = this.endOuterImg;
        this.renderer.setElementStyle(boxes[i].parentElement.children[0].children[3], 'visibility', 'visible');
      }

      // pick a word to be the active vocabulary word
      var startWordIndex = Math.floor(Math.random() * this.gameTableRows.length);
      this.activeVocabulary = this.arrayService.selectRandom(definitionsShown, 1)[0];
      this.startBoxes[startWordIndex].children[0].textContent = this.activeVocabulary.word;
      this.startBoxes[startWordIndex].parentElement.children[1].children[0].src = this.endUnderImg;
      this.renderer.setElementStyle(this.startBoxes[startWordIndex].parentElement.children[1].children[0], 'visibility', 'visible');
      this.startBoxes[startWordIndex].parentElement.children[1].children[3].src = this.endOuterImg;
      this.renderer.setElementStyle(this.startBoxes[startWordIndex].parentElement.children[1].children[3], 'visibility', 'visible');
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
        
    if(this.gameBoard[column][row].rock && this.gameBoard[column][row].rock.style.visibility == 'visible') return;

    if(this.gameBoard[column][row].water[0].style.visibility == 'visible') return;

    // if the game square has a pipe in it, remove the pipe fittings for that pipe
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
          if(row == 0 || this.gameBoard[column][row -1].connectors.length == 0 || !_.find(this.gameBoard[column][row - 1].fittings, function(fitting){ return fitting.className.includes('pipeFittingDown')})) return;
          var i = _.findIndex(this.gameBoard[column][row - 1].fittings, function(fitting){ return fitting.className.includes('pipeFittingDown')});
          this.resetPipeFitting(i, column, row - 1);
          
          break;
        case 'down':
          if(row == this.gameTableRows.length - 1 || this.gameBoard[column][row + 1].connectors.length == 0 || !_.find(this.gameBoard[column][row + 1].fittings, function(fitting){ return fitting.className.includes('pipeFittingUp')})) return;
          
          var i = _.findIndex(this.gameBoard[column][row + 1].fittings, function(fitting){ return fitting.className.includes('pipeFittingUp')});
          
          this.resetPipeFitting(i, column, row + 1);
          break;
        case 'left':
          if(column == 2 ||this.gameBoard[column - 1][row].connectors.length == 0 || !_.find(this.gameBoard[column - 1][row].fittings, function(fitting){ return fitting.className.includes('pipeFittingRight')})) return;
          
          var i = _.findIndex(this.gameBoard[column - 1][row].fittings, function(fitting){ return fitting.className.includes('pipeFittingRight')});
          this.resetPipeFitting(i, column - 1, row);
          break;
        case 'right':
      
          if(column == this.endColumn - 1 || this.gameBoard[column + 1][row].connectors.length == 0 || !_.find(this.gameBoard[column  + 1][row].fittings, function(fitting){ return fitting.className.includes('pipeFittingLeft')})) return;
          
          var i = _.findIndex(this.gameBoard[column  + 1][row].fittings, function(fitting){ return fitting.className.includes('pipeFittingLeft')})
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
            if(this.gameBoard[column - 1][row].underPipe.style.visibility == 'visible') {
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
          if((column == this.endColumn - 1 && this.gameBoard[column + 1][row].underPipe.style.visibility == 'visible') || this.gameBoard[column + 1][row].connectors.length > 0 && _.includes(this.gameBoard[column + 1][row].connectors, 'left')){
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
    this.levelWaterSpeed = this.defaultWaterSpeed - this.level;
     for(let i = 1; i< this.gameBoard.length; i++){
        for(let k = 0; k < this.gameBoard[i].length; k++){
          if(this.gameBoard[i][k].water[1]) console.log(this.gameBoard[i][k].water[1].className);
        }
     }

    this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'visibility', 'visible');
    this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockRightHalfFirst', true);
    this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockRightHalfFirst';
    
    
    this.waterPipes.push(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row]);
    
    this.setWaterEventListeners(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0]);
  }

  setWaterAnimation(water, animationLength){
    this.setWaterEventListeners(water);
    this.renderer.setElementStyle(water, 'visibility', 'visible');

    var waterSpeedModified = this.levelWaterSpeed;
    if (animationLength == 'firstHalf') waterSpeedModified = this.levelWaterSpeed * (2/3);
    if (animationLength == 'secondHalf') waterSpeedModified = this.levelWaterSpeed * (1/3)
    this.renderer.setElementStyle(water, '-webkit-animation-duration', waterSpeedModified + 's');
    this.renderer.setElementStyle(water, 'animation-duration', waterSpeedModified + 's');
  }

  setWaterEventListeners(water){
    water.addEventListener("webkitAnimationEnd", this.getNextWaterPipe.bind(this), false);
    water.addEventListener("animationend", this.getNextWaterPipe.bind(this), false);
    water.addEventListener("oanimationend", this.getNextWaterPipe.bind(this), false);
    water.addEventListener("MSAnimationEnd", this.getNextWaterPipe.bind(this), false);
  }

  removeWaterEventListeners(water){
    console.log(water);
    water.removeEventListener("webkitAnimationEnd", function(){}, false);
    water.removeEventListener("animationend", function(){}, false);
    water.removeEventListener("oanimationend", function(){}, false);
    water.removeEventListener("MSAnimationEnd", function(){}, false);
  }

  getNextWaterPipe(){
    if(this.nextWaterDirection){
      console.log('1');
      this.removeWaterEventListeners(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1]);
      this.waterDirection = this.nextWaterDirection;
      this.nextWaterDirection = '';
      switch (this.waterDirection) {
        case 'up':
          this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'waterBlockUpHalf', true);
          this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1].waterClass = 'waterBlockUpHalf';
        break;
        case 'down':
          this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'waterBlockDownHalf', true);
          this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1].waterClass = 'waterBlockDownHalf';
        break;
        case 'left':
          this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'waterBlockLeftHalf', true);
          this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1].waterClass = 'waterBlockLeftHalf';
        break;
        case 'right':
          this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'waterBlockRightHalf', true);
          this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1].waterClass = 'waterBlockRightHalf';
          
        break;
      }
      this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'secondHalf');
    }
    else {

      if(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1] && this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1].style.visibility == 'visible'){
        console.log(2); 
        this.removeWaterEventListeners(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1]);
      }
      else {console.log(3); this.removeWaterEventListeners(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0]);}
      switch (this.waterDirection) {
          case 'up':
           if(this.waterPipeLocation.row -1 < 0 || this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row - 1].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row - 1].connectors, 'down')){
            this.renderer.setElementClass(this.waterSpill, 'waterSpill', false);
            this.renderer.setElementClass(this.waterSpill, 'waterSpillUp', true);
            this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].element.appendChild(this.waterSpill);
            
            // this.renderer.setElementClass(this.waterSpill, 'waterSpill', false);
            this.loseGame();
            return;
           }
           this.waterPipeLocation.row -= 1;
            if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['down'])[0] == 'up'){
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection = 'DownUp';
               this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockUpfull', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockUpfull';
               this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'full');
            }
            else{
              this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['down'])[0];
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection ='Down' + this.nextWaterDirection.charAt(0).toUpperCase() + this.nextWaterDirection.slice(1);
              
              this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockUpHalfBottom', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockUpHalfBottom';
              this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'firstHalf');
            } 
          break;
          case 'down':
            if(this.waterPipeLocation.row + 1 == this.gameTableRows.length || this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row + 1].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row + 1].connectors, 'up')){
              this.renderer.setElementClass(this.waterSpill, 'waterSpill', false);
              this.renderer.setElementClass(this.waterSpill, 'waterSpillDown', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].element.appendChild(this.waterSpill);
              
              this.loseGame();
              return;
            }
            this.waterPipeLocation.row += 1;
              if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['up'])[0] == 'down'){
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection = 'UpDown';
                
              this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockDownFull', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockDownFull';
              this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'full');

              }
              else{
                this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['up'])[0];
                this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection = 'Up' + this.nextWaterDirection.charAt(0).toUpperCase() + this.nextWaterDirection.slice(1);
                
                this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockDownHalfTop', true);
                this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockDownHalfTop';
                this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'firstHalf');
            }
            break;
          case 'left':
            if(this.waterPipeLocation.column  - 1 < 1 || this.gameBoard[this.waterPipeLocation.column - 1][this.waterPipeLocation.row].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column - 1][this.waterPipeLocation.row].connectors, 'right')){
            this.renderer.setElementClass(this.waterSpill, 'waterSpill', false);
            this.renderer.setElementClass(this.waterSpill, 'waterSpillLeft', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].element.appendChild(this.waterSpill);
              this.loseGame();
              return;
            }
            this.waterPipeLocation.column -= 1;
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-left', '100px');
            if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['right'])[0] == 'left'){
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection = 'RightLeft';
              this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockLeftFull', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockLeftFull';
              this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'full');
            }
            else{
              this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['right'])[0];
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection = 'Right' + this.nextWaterDirection.charAt(0).toUpperCase() + this.nextWaterDirection.slice(1);
              this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockLeftHalfRight', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockLeftHalfRight';
              this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'firstHalf');

            }
          break;
          case 'right':
            this.waterPipeLocation.column += 1;
            if(this.waterPipeLocation.column == this.gameTableData.length + 3){
              if(this.checkForWin()){
                console.log('won');
                this.winGame()
              }
              else {
                this.renderer.setElementClass(this.waterSpill, 'waterSpill', false);
                this.renderer.setElementClass(this.waterSpill, 'waterSpillRight', true);
                this.gameBoard[this.waterPipeLocation.column - 2][this.waterPipeLocation.row].element.appendChild(this.waterSpill);
                this.loseGame();
              }
              return;
            }
            if(
                (this.waterPipeLocation.column < this.gameTableData.length + 2 && (this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors.length < 1 || !_.includes(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, 'left'))) ||
                (this.waterPipeLocation.column == this.gameTableData.length + 2 && this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].outerPipe.style.visibility != 'visible' )
              ){
                this.renderer.setElementClass(this.waterSpill, 'waterSpill', false);
                this.renderer.setElementClass(this.waterSpill, 'waterSpillRight', true);
                this.waterPipeLocation.column -= 1;
                this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].element.appendChild(this.waterSpill);
                this.waterPipeLocation.column == 1 ? this.renderer.setElementClass(this.waterSpill, 'waterSpillRightFirst', true) : this.renderer.setElementClass(this.waterSpill, 'waterSpillRight', true);;             
                this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].element.appendChild(this.waterSpill);
                this.loseGame();
                return;
            }
            this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'margin-left', '0px');
            if(this.waterPipeLocation.column == this.gameTableData.length + 2){
              this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockRightHalfLast', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockRightHalfLast';
              this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'last');
            }
            else if(_.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['left'])[0] == 'right'){
              this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockRightfull', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockRightfull';
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection = 'LeftRight';
              this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'full');
            }
            else{
              this.nextWaterDirection = _.difference(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].connectors, ['left'])[0];
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].waterDirection = 'Left' + this.nextWaterDirection.charAt(0).toUpperCase() + this.nextWaterDirection.slice(1);
              this.renderer.setElementClass(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'waterBlockRightHalfLeft', true);
              this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0].waterClass = 'waterBlockRightHalfLeft';
              this.setWaterAnimation(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'firstHalf');
            }
          break;
        }
      this.waterPipes.push(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row]);
      if(this.waterPipes.length > 2) this.moveBubbles();
      if(this.waterPipes.length % 3 == 0) this.newBubbles();
     }
  }

  newBubbles(){
    this.waterPipes[0].specialEffect.src = _.sample(this.bubbles);
    this.renderer.setElementClass(this.waterPipes[0].specialEffect, 'bubblesStart', true);
    this.renderer.setElementStyle(this.waterPipes[0].specialEffect, 'visibility', 'visible');
    this.renderer.setElementStyle(this.waterPipes[0].specialEffect, '-webkit-animation-duration', this.levelWaterSpeed + 's');
    this.renderer.setElementStyle(this.waterPipes[0].specialEffect, 'animation-duration', this.levelWaterSpeed + 's');
  }

  moveBubbles(){
    for(let i = this.waterPipes.length - 1; i > 0; i--){
      if(this.waterPipes[i - 1].specialEffect.style.visibility == 'visible'){
        this.renderer.setElementStyle(this.waterPipes[i - 1].specialEffect, 'visibility', 'hidden');
        this.renderer.setElementStyle(this.waterPipes[i].specialEffect, 'visibility', 'visible');
        this.waterPipes[i].specialEffect.src = this.waterPipes[i - 1].specialEffect.src;
        this.renderer.setElementClass(this.waterPipes[i - 1].specialEffect, 'bubbles' + ((i - 1) == 0 ? 'Start': this.waterPipes[i -1].waterDirection), false);
        this.renderer.setElementStyle(this.waterPipes[i].specialEffect, '-webkit-animation-duration', this.levelWaterSpeed + 's');
        this.renderer.setElementStyle(this.waterPipes[i].specialEffect, 'animation-duration', this.levelWaterSpeed + 's');
        this.renderer.setElementClass(this.waterPipes[i].specialEffect, 'bubbles' + this.waterPipes[i].waterDirection, true);
      }
    }
  }

  reload(){

    // clear the definitions
     for(var i = 0; i < this.finishBoxes.length; ++i){
        this.finishBoxes[i].children[0].textContent = '';
      }

      // clear the word
      for(var i = 0; i < this.startBoxes.length; ++i){
        this.startBoxes[i].children[0].textContent = '';
      }

      // clear the pipes
      for(let i = 1; i< this.gameBoard.length; i++){
        for(let k = 0; k < this.gameBoard[i].length; k++){
          this.waterPipes[i].specialEffect.src = '';
          this.gameBoard[i][k].connectors = [];
          _.unset(this.gameBoard[i][k], 'pipeRotation'); 
          this.gameBoard[i][k].water.forEach(wat => {
            this.renderer.setElementClass(wat, wat.waterClass, false)
            this.renderer.setElementStyle(wat, 'visibility', 'hidden');
            _.unset(wat, wat.waterClass);
          });
          if(this.gameBoard[i][k].fittings) this.resetPipeFitting(0, i, k);
          if(this.gameBoard[i][k].fittings) this.resetPipeFitting(1, i, k);
        }
      }

      for(let i = 0; i < this.rockSquares.length; i++){
        if(this.rockSquares[i].src){
          this.rockSquares[i].src = '';
          this.renderer.setElementStyle(this.rockSquares[i], 'visibility', 'hidden');
        }
      }

      for(var i = 0; i < document.body.getElementsByClassName('underPipe').length; ++i){
      //  document.body.getElementsByClassName('underPipe')[i].src = '';
       this.renderer.setElementStyle(document.body.getElementsByClassName('underPipe')[i], 'visibility', 'hidden');
      }

       for(var i = 0; i < document.body.getElementsByClassName('outerPipe').length; ++i){
        // document.body.getElementsByClassName('outerPipe')[i].src = '';
        this.renderer.setElementStyle(document.body.getElementsByClassName('outerPipe')[i], 'visibility', 'hidden');
      }
      
      // get new pipes for the container
      this.initPipesInHoldingBoxes();

        this.renderer.setElementClass(this.waterPipes[0].specialEffect, 'bubblesStart', false);

        this.renderer.setElementClass(this.waterPipes[0].specialEffect, 'bubblesStart', false);
        for(let i = 1; i < this.waterPipes.length; i++){
          this.waterPipes[i].waterDirection = '';
          this.renderer.setElementClass(this.waterPipes[i].specialEffect, 'bubbles' + this.waterPipes[i].waterDirection, false);
        }

      this.waterPipes = [];
      console.log(this.waterPipes.length);

      this.waterPipeLocation = {row: 0, column: 1};
      
      // reload the game board
      this.loadGameboard();

      this.gameController.startCountdown();
  }

  highlightGameboardTile(event, column, row){
    if((this.gameBoard[column][row].rock && this.gameBoard[column][row].rock.style.visibility == 'visible') || _.find(this.gameBoard[column][row].water, function(water){ return water.style.visibility == 'visible'})) return;
      this.renderer.setElementStyle(this.gameBoard[column][row].element, 'background-color', 'purple');
  }

  unhighlightGameBoardTile(event, column, row){
      this.renderer.setElementStyle(this.gameBoard[column][row].element, 'background-color', '');
  }

  shakeRecycle(event){
    
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
    this.waterPipes.forEach(p => console.log(p));
    console.log(this.waterPipes.length);
    this.hideBubbles();
    this.spillState = 'spilled';
    this.renderer.setElementStyle(this.waterSpill, 'visibility', 'visible');
    this.gameDone = true;

  }

  hideBubbles(){
    for(let i = 0; i < this.waterPipes.length; i++){
      if(this.waterPipes[i].specialEffect.style.visibility == 'visible'){
        this.renderer.setElementStyle(this.waterPipes[i].specialEffect, 'visibility', 'hidden');
      }
    }
  }

  checkForWin(){
    if(this.gameBoard[this.waterPipeLocation.column - 1][this.waterPipeLocation.row].element.children[1].textContent.trim() == this.activeVocabulary.definition){
      return true;
    }
    return false;
  }

  winGame(){
    this.level++;
    this.reload();
    this.hideBubbles();
    this.gameDone = true;
  }
  speedUpWater() {
    if(this.gameDone) return;
    this.levelWaterSpeed /= 5;
    if(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1] && this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1].style.visibility == 'visible') {
      this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], '-webkit-animation-duration', this.levelWaterSpeed + 's');
      this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[1], 'animation-duration', this.levelWaterSpeed + 's');
    }
    else 
      this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], '-webkit-animation-duration', this.levelWaterSpeed + 's');
      this.renderer.setElementStyle(this.gameBoard[this.waterPipeLocation.column][this.waterPipeLocation.row].water[0], 'animation-duration', this.levelWaterSpeed + 's');
   }

  countdownDone() {
    this.gameDone = false;
      this.startWater();
  }
}
