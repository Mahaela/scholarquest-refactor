import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from '../../student.service';
import { VocabularyService } from './vocabulary/vocabulary.service';

@Component({
  selector: 'sq-vocab-match',
  templateUrl: './vocab-match.component.html',
  styleUrls: ['./vocab-match.component.css']

})
export class VocabMatchComponent {

  private vocab = [];
  private vocabWords = [];
  private vocabDefs = [];
  private vocabNum = 10;

  constructor(private vocabularyService: VocabularyService) {

    if (this.vocabularyService.getVocabulary().length < 10){

      // get the vocabulary that will be used
      this.vocab = this.vocabularyService.getVocabulary();

      // randomize the vocabulary array
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

dragover(event){
  console.log("hi");
  event.preventDefault();
}

 onDrop(ev){
   console.log("hello");
   ev.preventDefault();

 }
}
