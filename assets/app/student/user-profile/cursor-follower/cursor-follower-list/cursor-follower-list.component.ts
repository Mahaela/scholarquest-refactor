import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, HostListener, ElementRef, Input, OnChanges,  OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EyesComponent } from '../eyes/eyes.component';
import { CursorFollowerService } from '../cursor-follower.service';

@Component({
  selector: 'sq-cursor-follower-list',
  templateUrl: './cursor-follower-list.component.html',
  entryComponents: [EyesComponent],
  providers: [EyesComponent],
  styleUrls: ['./cursor-follower-list.component.css']
})
export class CursorFollowerListComponent {
    @ViewChild('cursorFollower', { read: ViewContainerRef }) cursorFollower;
    private componentRef;
    private cursorFollowers;
    private cursorFollowerIndex = 0;
    @Input() xPos;
    @Input() yPos;
    private cursorFollowerReady = false;
    private studentServiceIndex;
    subscription: Subscription;


    constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private cursorFollowerService: CursorFollowerService, private elementRef: ElementRef) {
       // this.cursorFollowers = cursorFollowerService.getCursorFollowerComponents();
        // this.subscription = this.studentService.cursorFollowerStartPositionObs.subscribe(cf => this.changeFollower(cf));
        // this.cursorFollowerIndex = this.studentService.getCursorFollower();
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
