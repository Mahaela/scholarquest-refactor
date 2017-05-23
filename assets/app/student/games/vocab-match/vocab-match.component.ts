import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../../student.service';
import { VocabularyService } from './vocabulary/vocabulary.service';

@Component({
  selector: 'sq-vocab-match',
  templateUrl: './vocab-match.component.html',
  styleUrls: ['./vocab-match.component.css']

})
export class VocabMatchComponent{

  private vocab = [];
  private vocabWords = [];
  private vocabDefs = [];
  private vocabNum = 10;
  private selectedWord: string;

  constructor(private vocabularyService: VocabularyService, private renderer: Renderer) {

    if (this.vocabularyService.getVocabulary().length < 10){

      // get the vocabulary that will be used
      var vocab = this.vocabularyService.getVocabulary();

      // randomize the vocabulary words that will be displyed
      for(var  i = 0; i < this.vocab.length; i) {
        var randIndex = Math.floor(Math.random() * this.vocab.length)

        this.vocabWords.push(this.vocab[randIndex].word)
      }
    }
    else {
      
      // get the vocabulary for the game
      var tempVocab = this.vocabularyService.getVocabulary();

      for (var i = 0; i < this.vocabNum; i++){

        // pick a random solution, we don't want the game board to look the same across games
        var randIndex = Math.floor(Math.random() * tempVocab.length);

        // remove the solution from the array, so the same solution doesn't show up more than once on the game board
        // add the equation to the global equations array so we can use it later for the the problem
        this.vocab.push(tempVocab.splice(randIndex, 1)[0]);
        this.vocabWords.push(this.vocab[this.vocab.length -1].word);
      }
    }

    for(var i = 0; i < this.vocab.length; i++){

        // pick a random solution, we don't want the game board to look the same across games
        var randIndex = Math.floor(Math.random() * this.vocab.length);

        // remove the solution from the array, so the same solution doesn't show up more than once on the game board
        // add the equation to the global equations array so we can use it later for the the problem
        this.vocabDefs.push(this.vocab[randIndex].definition);
    }
  }

/*
 * 
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

      this.renderer.setElementStyle(ev.target, "border", "solid green");
      for(var i = 0; i < this.vocabWords.length; i++) {
        if(this.vocabWords[i] == v.word){
          this.vocabWords.splice(i, 1);
        }
      }
     }
   })
 }

 dragStart(row){
   this.selectedWord = row;
 }
}
