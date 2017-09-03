import { Component, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';
import * as createjs from 'createjs-module';

import { ApiService } from '../../../shared/utils/api.service';


@Component({
  selector: 'sq-apple-drop',
  templateUrl: './apple-drop.component.html',
  styleUrls: ['./apple-drop.component.css']
})
export class AppleDropComponent implements AfterViewInit {
  
  // private canvas;
  private context;


  ngAfterViewInit() {
    var stage = new createjs.Stage("canvas");
    console.log(stage);
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
    circle.x = 50;
    circle.y = 50;
    stage.addChild(circle);

    
    stage.update();
 
    // createjs.Tween.get(circle, { loop: true })
    // .to({ x: 100 }, 1000, createjs.Ease.getPowInOut(4))
    // .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    // .to({ alpha: 0, y: 225 }, 100)
    // .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
    // .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
 
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

//     var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext("2d");

// canvas.width = 934;
// canvas.height = 622;


// var background = new Image();
// background.src = require('../../../assets/games/appleDrop/background.jpg');

// background.onload = function(){
//     ctx.drawImage(background,0,0);   
// }
  }

}
