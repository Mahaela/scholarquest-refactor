import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../../student.service';
import { VocabularyService } from './vocabulary/vocabulary.service';
import { WinDialogComponent } from '../win-dialog/win-dialog.component';

@Component({
  selector: 'sq-vocab-match',
  templateUrl: './vocab-match.component.html',
  styleUrls: ['./vocab-match.component.css']

})
export class VocabMatchComponent{

  private vocab = [];
  private vocabFullList = [];
  private vocabWords = [];
  private vocabDefs = [];
  private vocabNum = 10;
  private selectedWord: string;
  private score = 0;

  @ViewChild('score') scoreTxt: ElementRef;
  @ViewChild('winDialog') winDialog: WinDialogComponent;


  constructor(private vocabularyService: VocabularyService, private renderer: Renderer) {

    // get the vocabulary that will be use (the first grade vocabulary)
    this.vocabFullList = this.vocabularyService.getVocabularyFirst();
    this.initGameBoard();
  }
  
  initGameBoard(){

    // we want the displayed vocabulary to be under a cetain size so its easier to move in
    if (this.vocabFullList.length< this.vocabNum){
      this.vocab = this.vocabFullList;

      // randomize the vocabulary words that will be displyed
      for(var  i = 0; i < this.vocab.length; i) {
        var randIndex = Math.floor(Math.random() * this.vocab.length)
        this.vocabWords.push(this.vocab[randIndex].word)
      }
    }
    else {

      // get the vocabulary for the game
      var tempVocab = this.vocabFullList.slice();
      this.vocab = [];

      // randomize the vocabulary words that will be displyed
      for (var i = 0; i < this.vocabNum; i++){
        var randIndex = Math.floor(Math.random() * tempVocab.length);
        this.vocab.push(tempVocab.splice(randIndex, 1)[0]);
        this.vocabWords.push(this.vocab[this.vocab.length -1].word);
      }
    }

    // randomize the vocab definitions that will be displayed
    var tempVocab = this.vocab.slice();
    for(var i = 0; i < this.vocab.length; i++){
        var randIndex = Math.floor(Math.random() * tempVocab.length);
        this.vocabDefs.push(tempVocab.splice(randIndex, 1)[0].definition);
      }
    }

/*
 * allow drag and drop
 */
dragover(event){
  event.preventDefault();
}

/*
 * called when the vocab word is dropped in the drop container 
 */ 
 onDrop(ev, row){
   this.vocab.forEach(v => {

     // if the vocab word matches the definition ...
     if(v.word == this.selectedWord && v.definition == row){

       // set the word in the drop container to be the vocab word
      ev.target.textContent = this.selectedWord;

      // change the border to solid green 
      this.renderer.setElementStyle(ev.target, "border", "solid green");
     
     // remove the vocab word fromm the list so can't be used again
      for(var i = 0; i < this.vocabWords.length; i++) {
        if(this.vocabWords[i] == v.word){
          this.vocabWords.splice(i, 1);

          // add to the score
          this.score += 10;
          this.scoreTxt.nativeElement.textContent ="Score: " + this.score;

          // if the game is over, open the dialog that will prompt the user to play again
          if(this.vocabWords.length == 0){
                 this.winDialog.openDialog();
          }    
        }
      }
     }
   })
 }

/*
 * get the word that is being dragged 
 */
 dragStart(row){
   this.selectedWord = row;
 }

/*
 * change the vocabulary when a new word is selected
 */
 changeGradeLevel(event){
  
    switch(event) { 
        case 2: { 
            this.vocabFullList = this.vocabularyService.getVocabularySecond(); 
            break; 
        }
        case 3: { 
            this.vocabFullList  = this.vocabularyService.getVocabularyThird();
            console.log(this.vocab);
            break; 
        }
        case 4: { 
            this.vocabFullList  = this.vocabularyService.getVocabularyFourth(); 
            break; 
        }
        case 5: { 
            this.vocabFullList  = this.vocabularyService.getVocabularyFifth(); 
            break; 
        }
        case 6: { 
            this.vocabFullList  = this.vocabularyService.getVocabularySixth();
            break; 
        } 
        default: { 
            this.vocabFullList  = this.vocabularyService.getVocabularyFirst();
            break; 
        } 
    }
    this.reload();
 }

/*
 * start a new game
 */
 reload(){
   this.vocab = [];
    this.vocabWords = [];
    this.vocabDefs = [];
    this.score = 0;
    this.scoreTxt.nativeElement.textContent ="Score: " + this.score;
    this.initGameBoard();
 }
}
