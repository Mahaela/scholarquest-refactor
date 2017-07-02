import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, HostListener, ElementRef, Input, OnChanges,  OnDestroy, trigger, style, state, transition, animate} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CursorFollowerService } from '../cursor-follower.service';

@Component({
  selector: 'sq-cursor-follower',
  templateUrl: './cursor-follower.component.html',
  styleUrls: ['./cursor-follower.component.css'],
    animations: [
      trigger('show', [
          state('invisible', style({ 'opacity': 0 })),
          state('visible', style({ 'opacity': 1 })),
          transition('invisible => visible', animate(2000)),
          transition('visible => invisible', animate(1000))])
      ]
})
export class CursorFollowerListComponent implements AfterViewInit{
    @ViewChild('cursorFollower', { read: ViewContainerRef }) cursorFollower;
    private componentRef;
    private cursorFollowers;
    private cursorFollowerIndex = 0;
    @Input() xPos;
    @Input() yPos;
    private cursorFollowerReady = false;
    private studentServiceIndex;
    displayedCursorFollower: any;
    show = 'invisible';
    
    constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private cursorFollowerService: CursorFollowerService, private elementRef: ElementRef) {
        //    this.cursorFollowers = cursorFollowerService.getCursorFollowerComponents();
        //    this.subscription = this.studentService.cursorFollowerStartPositionObs.subscribe(cf => this.changeFollower(cf));
        //    this.cursorFollowerIndex = this.studentService.getCursorFollower();
    }


    
    ngAfterViewInit(){
        this.cursorFollowerService.selectedCursorFollower.subscribe((value) => {
        if (value) { 
            this.show = 'visible';
        }
        else {
            this.show = 'invisible';
        }
        
    })
    }

    // changeFollower(cf: number[]) {
    //     if (this.cursorFollowerReady) {
    //         this.cursorFollower.clear();
    //         if (cf[0] != 0) {
    //             let factory = this.componentFactoryResolver.resolveComponentFactory(this.cursorFollowers[cf[0]]);
    //             this.componentRef = this.cursorFollower.createComponent(factory);
    //             this.cursorFollowerIndex = cf[0];
    //             this.moveCursorFollower();
    //         }
    //     }
    // }

    // ngAfterContentInit() {
    //     this.cursorFollowerReady = true;
    //     if (this.cursorFollowerIndex != 0) {
    //         let factory = this.componentFactoryResolver.resolveComponentFactory(this.cursorFollowers[this.cursorFollowerIndex]);
    //         this.componentRef = this.cursorFollower.createComponent(factory);
    //         this.moveCursorFollower();
    //     }
    // }
            
    // ngOnChanges() {
    //     if (this.cursorFollowerIndex != 0 && this.cursorFollowerReady) {
    //         this.moveCursorFollower();
    //     }
    // }

    // moveCursorFollower() {
    //     this.componentRef.instance.yPos = this.yPos;
    //     this.componentRef.instance.xPos = this.xPos;
    // }
    // ngOnDestroy(){
    //     this.subscription.unsubscribe();
    // }
}
