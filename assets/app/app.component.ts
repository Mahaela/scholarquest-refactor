import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    private xPos = 0;
    private yPos = 0;
    private cursorFollower = '0';
    private loaded: Promise<boolean>;
    private backgroundimg = require('./assets/backgrounds/stone2.png');

    constructor() {}
    // mouseMove($event) {
    //     let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    //     let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    //     this.xPos = event.clientX + xOffset;
    //     this.yPos = event.clientY + yOffset;
    // }
}