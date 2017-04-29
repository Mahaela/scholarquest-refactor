import { Component, ViewChild, Input, Renderer, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { StudentService } from '../../../student.service';
import { CursorService } from '../cursor.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sq-cursor-display',
  templateUrl: './cursor-display.component.html',
  styleUrls: ['./cursor-display.component.css']
})
export class CursorDisplayComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild('cursor') cursor;
    @Input() xPos;
    @Input() yPos;
    private cursorIndex: number = 0;
    private displayedCursor: string;
    private cursors: string[];
    private cursorSubscription: Subscription;

    constructor(private renderer: Renderer, private studentService: StudentService, private cursorService: CursorService) {
        this.cursors = cursorService.getCursors();
        this.cursorIndex = this.studentService.getCursor()
        this.displayedCursor = this.cursors[this.cursorIndex];
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

    changeCursor(index: number) {
        this.cursorIndex = index;
        this.displayedCursor = this.cursors[index];
        if (this.cursorIndex == 0) {
   
            this.renderer.setElementStyle(this.cursor.nativeElement, 'opacity', '0');
        }
        else {
            this.renderer.setElementStyle(this.cursor.nativeElement, 'opacity', '.5');
        }
    }

    ngOnDestroy(){
        this.cursorSubscription.unsubscribe;
    }

    ngAfterViewInit() {
        this.cursorSubscription = this.studentService.cursorStartPositionObs.subscribe(pos => {
            this.changeCursor(pos[0]);
            this.xPos = pos[1];
            this.yPos = pos[2];
            this.moveCursor();
        });
        if (this.cursorIndex == 0) {
            this.renderer.setElementStyle(this.cursor.nativeElement, 'opacity', '0');
        }
    }

}
