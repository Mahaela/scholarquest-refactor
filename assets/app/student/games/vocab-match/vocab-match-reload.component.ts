import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sq-vocab-match-reload',
  template:' ',
  styles: []
})
export class VocabMatchReloadComponent {

    constructor(private router: Router) {
        this.router.navigate(['/games/vocabMatch']);
    }

}
