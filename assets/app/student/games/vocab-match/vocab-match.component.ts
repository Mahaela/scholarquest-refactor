import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { DragulaService, DragulaModule, dragula } from 'ng2-dragula/ng2-dragula';
// import 'dragula/dist/dragula.css';

import { StudentService } from '../../student.service';
import { VocabMatchSecondService } from './vocabulary/vocab-match-second.service';

@Component({
  selector: 'sq-vocab-match',
  templateUrl: './vocab-match.component.html',
  styleUrls: ['./vocab-match.component.css'],
  providers: [VocabMatchSecondService]

})
export class VocabMatchComponent {
    private vocabulary = new Array();
    private numVocabProblems = 50;
    private submitButtonDisplay = false;
    private score = 0;
    private scoreDisplay = false;
    private correctIndexes = [];
    @ViewChild('wordContainer') wordContainer: ElementRef;


    // constructor(private vocabMatchSecondService: VocabMatchSecondService, private dragulaService: DragulaService, private studentService: StudentService, private router: Router) {
    //     var tempArray = this.vocabMatchSecondService.getVocabulary();
    //     this.numVocabProblems > tempArray.length ? this.numVocabProblems = tempArray.length : "";

    //      //put the vocab problems into a randomized arary
    //     for (let i = 0; i < this.numVocabProblems; ++i) {
    //         var index = Math.floor(tempArray.length * Math.random());
    //         tempArray[index].push(i);
    //         this.vocabulary.push(tempArray[index]);
    //         tempArray.splice(index, 1);
    //     }


    //     dragulaService.drop.subscribe((value) => {
    //         //if a div was dropped in one of the left side containers
    //         if (value[2]["classList"]["value"].indexOf("dropContainer") > -1) {
    //            //if the left side container has more than one definition in it
    //             if (value[2]["childElementCount"] > 1) {
    //                 //add the old definition in the dropcContainer to the right side list
    //                 document.getElementById("definitionsDragContainer").appendChild(document.getElementById(value[2]["lastChild"]["id"]));  
    //             }
    //         }
    //         document.getElementById('definitionsDragContainer').childElementCount > 0 ? this.submitButtonDisplay = false : this.submitButtonDisplay = true;
    //     });        
    // }

    // submit() {
    //     var correctIndexes = new Array();
    //     this.submitButtonDisplay = false;
    //     this.scoreDisplay = true;
    //     //check for correct word-definition matches, update score
    //     for (var i = 0; i < this.wordContainer.nativeElement.children.length; ++i){
    //         if (this.vocabulary[i][1] == this.wordContainer.nativeElement.children[i].children[1].children[0].textContent.trim()) {
    //             this.score += 15;
    //             correctIndexes.push(i);
    //         }  
    //     }
    //     this.studentService.setCoins(this.score);
    //     this.correctIndexes = correctIndexes;
    // }

    // playAgain() {
    //     this.router.navigate(['/games/vocabMatchReload']);
    // }
}
