import { Component, ElementRef, ViewChild, HostListener, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIcon } from '@angular/material';

import { EndGameDialogComponent } from '../end-game-dialog/end-game-dialog.component';
import { VocabularyService } from '../vocabulary/vocabulary.service';


@Component({
  selector: 'sq-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']

})
export class TypingComponent implements AfterViewInit{
  
  private vocabularyFull = [];
  private vocabulary = [];
  private displayedWord: string;
  private vocabularyQueue = [];
  private score = 0;
  private strikes = 0;
  private scoreText ="Score : 0"
  private strikeIcons = []

  @ViewChild('endGameDialog') endGameDialog: EndGameDialogComponent;

  constructor( private vocabularyService: VocabularyService, private renderer: Renderer ){
  
      // get the vocabulary that will be used 
      this.vocabularyFull = vocabularyService.getVocabularyFirst();

      // load the gameboard
      this.reload();
  }

  ngAfterViewInit(){
     // get the displayed strikes
     for(var i = 0; i < Object.keys(document.body.querySelectorAll('md-icon')).length; ++i){
       if(document.body.querySelectorAll('md-icon')[i].innerHTML == "clear"){
         this.strikeIcons.push(document.body.querySelectorAll('md-icon')[i]);
      }  
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    // stop the space bar from causing the page to scroll
    if(event.keyCode == 32){
      event.preventDefault();
    }
    // if the word has been typed, then the user must press space
    if (!this.endGameDialog.isOpen && this.displayedWord.length == 0 && event.keyCode == 32){
      // get a new word for typing
      this.displayedWord = this.vocabularyQueue.shift();
      // add a new word to the queue if there are words left in the vocabulary array
      if(this.vocabulary.length > 0) this.vocabularyQueue.push(this.vocabulary.splice(Math.floor(Math.random() * this.vocabulary.length), 1)[0].word);
      // update the score
      this.score += 10;
      this.scoreText = "Score: " + this.score.toString();
  }
    // if the key pressed is the correct key
    else if (event.key == this.displayedWord.charAt(0)) { 
      // remove the letter that was just pressed
      this.displayedWord = this.displayedWord.substring(1, this.displayedWord.length);
    }
    // add a strike
    else if(this.strikes < 10) {
      this.addStrike()
    }
    // if every letter of every word has been typed, display win dialog prompting user to play again
    if (this.displayedWord.length == 0 && this.vocabularyQueue.length == 0) {
      this.endGameDialog.openWinDialog();
      // update the score
      this.score += 20;
      this.scoreText = "Score: " + this.score.toString();
    }
  }

  addStrike(){
      // change the strike color to red
      this.renderer.setElementStyle(this.strikeIcons[this.strikes], 'color', 'red');
      this.strikes++;
      // if the player has lost, open a dialog prompting the user to play again
      if(this.strikes == this.strikeIcons.length){
        this.endGameDialog.openLoseDialog();
    }
    
  }

/*
 * change the vocabulary when a new word is selected
 */
 changeGradeLevel(event){
  
    switch(event) { 
        case 2: { 
            this.vocabularyFull = this.vocabularyService.getVocabularySecond();
            break; 
        }
        case 3: { 
            this.vocabularyFull = this.vocabularyService.getVocabularyThird();
            break; 
        }
        case 4: { 
            this.vocabularyFull = this.vocabularyService.getVocabularyFourth();            
            break; 
        }
        case 5: { 
            this.vocabularyFull = this.vocabularyService.getVocabularyFifth();                         
            break; 
        }
        case 6: { 
            this.vocabularyFull  = this.vocabularyService.getVocabularySixth();
            break; 
        } 
        default: { 
            this.vocabularyFull = this.vocabularyService.getVocabularyFirst();
            break; 
        } 
    }
    this.reload();
 }

/*
 * reload the gameboard;
 */ 
 reload(){
   this.vocabulary = this.vocabularyFull.slice();
   this.vocabularyQueue = [];
    // get the first word
    this.displayedWord = this.vocabulary.splice(Math.floor(Math.random() * this.vocabulary.length), 1)[0].word;
    // get the words for the queue
    var queueSize = this.vocabulary.length < 4 ? this.vocabulary.length : 4;
    for(var i = 0; i < queueSize; i++){
      this.vocabularyQueue.push(this.vocabulary.splice(Math.floor(Math.random() * this.vocabulary.length), 1)[0].word);
    }
      // update the score
      this.score = 0;
      this.scoreText = "Score: " + this.score.toString();

      // reset the strikes
      this.strikes = 0;
      console.log(this.strikeIcons);
      this.strikeIcons.forEach(icon => this.renderer.setElementStyle(icon, 'color', null))
  }
}
