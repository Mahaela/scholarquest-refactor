import { Component, ViewChild, Input, Renderer, AfterViewInit, trigger, style, state, transition, animate } from '@angular/core';
import { CursorService } from '../cursor.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sq-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
  animations: [
      trigger('show', [
          state('invisible', style({ 'opacity': 0 })),
          state('visible', style({ 'opacity': 1 })),
          transition('invisible => visible', animate(2000)),
          transition('visible => invisible', animate(300))])
      ]
})
export class CursorComponent implements AfterViewInit {
    @ViewChild('cursor') cursor;
    @Input() xPos;
    @Input() yPos;
    cursorIndex: number = 1;
    displayedCursor: string;
    cursors: string[];
    cursorSubscription: Subscription;
    show = 'invisible';

    constructor(private renderer: Renderer, private cursorService: CursorService) {
    }

    ngAfterViewInit(){
        this.cursorService.selectedCursor.subscribe((value) => {
            if (value != 1) { 
                this.displayedCursor = this.cursorService.getCursors()[value -1].img;
                this.show = 'visible';
            }
            else {
                this.show = 'invisible';
            }
        })
    }

    ngOnChanges() {
        if (this.cursor != 'undefined') { 
            this.moveCursor();    
        }        
    }

    moveCursor() {
        this.renderer.setElementStyle(this.cursor.nativeElement, 'left', this.xPos - 10 + 'px');
        this.renderer.setElementStyle(this.cursor.nativeElement, 'top', this.yPos - 5 + 'px');
    }
}
