import { Component, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';
// import * as Matter from 'matter-js';
		// necessary to get phaser to work
    window.PIXI = require('phaser/build/custom/pixi')
    window.p2 = require('phaser/build/custom/p2')
    window.Phaser = require('phaser/build/custom/phaser-split')
import * as Phaser from 'phaser';
import * as _ from 'lodash';

import { ApiService } from '../../../shared/utils/api.service';

@Component({
  selector: 'sq-apple-drop',
  templateUrl: './apple-drop.component.html',
  styleUrls: ['./apple-drop.component.css']
})
export class AppleDropComponent implements AfterViewInit{
  
  private bagVelocity = 0;

  private vocabFull;
  private vocabRemaining;
  public word: string[];
  private letterIndex = 0;
  
  private game;
  private startDialog = {};
  private apples;
  private bagFront;
  private bagBack;
  private arrowKeys;
  private curLetter;
  private livesGroup;
  private appleCount;
  private worm;
  
  private floorCollisionGroup;
  private appleCollisionGroup;
  private bagCollisionGroup;
  private bagGroup;
  private armColliderRight;
  private armColliderLeft;
  private livesCollisionGroup
  private correctAppleInBag = false;
  private incorrectAppleInBag = false;
  private treeLetters;

  private bagSensor;

  @ViewChild('game') gameController;

  ngAfterViewInit(){
    // get the vocabulary the player will start with
    this.gameController.getVocabulary().subscribe(
    data => { 
      this.game = new Phaser.Game(1750, 1000, Phaser.AUTO, '', { preload: this.preload, create: this.create.bind(this), update: this.update.bind(this)});
      this.vocabFull = data.vocab
      this.game.controller = this.gameController;
      },
    error => {
     }
    )
  }

  preload() {
    this.game.load.image('background', require('../../../assets/games/appleDrop/background.jpg'));
    this.game.load.image('apple_cap_a', require('../../../assets/games/appleDrop/apple_cap_a.png'));
    this.game.load.image('apple_cap_b', require('../../../assets/games/appleDrop/apple_cap_b.png'));
    this.game.load.image('apple_cap_c', require('../../../assets/games/appleDrop/apple_cap_c.png'));
    this.game.load.image('apple_cap_d', require('../../../assets/games/appleDrop/apple_cap_d.png'));
    this.game.load.image('apple_cap_e', require('../../../assets/games/appleDrop/apple_cap_e.png'));
    this.game.load.image('apple_cap_f', require('../../../assets/games/appleDrop/apple_cap_f.png'));
    this.game.load.image('apple_cap_g', require('../../../assets/games/appleDrop/apple_cap_g.png'));
    this.game.load.image('apple_cap_h', require('../../../assets/games/appleDrop/apple_cap_h.png'));
    this.game.load.image('apple_cap_i', require('../../../assets/games/appleDrop/apple_cap_i.png'));
    this.game.load.image('apple_cap_j', require('../../../assets/games/appleDrop/apple_cap_j.png'));
    this.game.load.image('apple_cap_k', require('../../../assets/games/appleDrop/apple_cap_k.png'));
    this.game.load.image('apple_cap_l', require('../../../assets/games/appleDrop/apple_cap_l.png'));
    this.game.load.image('apple_cap_m', require('../../../assets/games/appleDrop/apple_cap_m.png'));
    this.game.load.image('apple_cap_n', require('../../../assets/games/appleDrop/apple_cap_n.png'));
    this.game.load.image('apple_cap_o', require('../../../assets/games/appleDrop/apple_cap_o.png'));
    this.game.load.image('apple_cap_p', require('../../../assets/games/appleDrop/apple_cap_p.png'));
    this.game.load.image('apple_cap_q', require('../../../assets/games/appleDrop/apple_cap_q.png'));
    this.game.load.image('apple_cap_r', require('../../../assets/games/appleDrop/apple_cap_r.png'));
    this.game.load.image('apple_cap_s', require('../../../assets/games/appleDrop/apple_cap_s.png'));
    this.game.load.image('apple_cap_t', require('../../../assets/games/appleDrop/apple_cap_t.png'));
    this.game.load.image('apple_cap_u', require('../../../assets/games/appleDrop/apple_cap_u.png'));
    this.game.load.image('apple_cap_v', require('../../../assets/games/appleDrop/apple_cap_v.png'));
    this.game.load.image('apple_cap_w', require('../../../assets/games/appleDrop/apple_cap_w.png'));
    this.game.load.image('apple_cap_x', require('../../../assets/games/appleDrop/apple_cap_x.png'));
    this.game.load.image('apple_cap_y', require('../../../assets/games/appleDrop/apple_cap_y.png'));
    this.game.load.image('apple_cap_z', require('../../../assets/games/appleDrop/apple_cap_z.png'));

    this.game.load.image('apple_low_a', require('../../../assets/games/appleDrop/apple_low_a.png'));
    this.game.load.image('apple_low_b', require('../../../assets/games/appleDrop/apple_low_b.png'));
    this.game.load.image('apple_low_c', require('../../../assets/games/appleDrop/apple_low_c.png'));
    this.game.load.image('apple_low_d', require('../../../assets/games/appleDrop/apple_low_d.png'));
    this.game.load.image('apple_low_e', require('../../../assets/games/appleDrop/apple_low_e.png'));
    this.game.load.image('apple_low_f', require('../../../assets/games/appleDrop/apple_low_f.png'));
    this.game.load.image('apple_low_g', require('../../../assets/games/appleDrop/apple_low_g.png'));
    this.game.load.image('apple_low_h', require('../../../assets/games/appleDrop/apple_low_h.png'));
    this.game.load.image('apple_low_i', require('../../../assets/games/appleDrop/apple_low_i.png'));
    this.game.load.image('apple_low_j', require('../../../assets/games/appleDrop/apple_low_j.png'));
    this.game.load.image('apple_low_k', require('../../../assets/games/appleDrop/apple_low_k.png'));
    this.game.load.image('apple_low_l', require('../../../assets/games/appleDrop/apple_low_l.png'));
    this.game.load.image('apple_low_m', require('../../../assets/games/appleDrop/apple_low_m.png'));
    this.game.load.image('apple_low_n', require('../../../assets/games/appleDrop/apple_low_n.png'));
    this.game.load.image('apple_low_o', require('../../../assets/games/appleDrop/apple_low_o.png'));
    this.game.load.image('apple_low_p', require('../../../assets/games/appleDrop/apple_low_p.png'));
    this.game.load.image('apple_low_q', require('../../../assets/games/appleDrop/apple_low_q.png'));
    this.game.load.image('apple_low_r', require('../../../assets/games/appleDrop/apple_low_r.png'));
    this.game.load.image('apple_low_s', require('../../../assets/games/appleDrop/apple_low_s.png'));
    this.game.load.image('apple_low_t', require('../../../assets/games/appleDrop/apple_low_t.png'));
    this.game.load.image('apple_low_u', require('../../../assets/games/appleDrop/apple_low_u.png'));
    this.game.load.image('apple_low_v', require('../../../assets/games/appleDrop/apple_low_v.png'));
    this.game.load.image('apple_low_w', require('../../../assets/games/appleDrop/apple_low_w.png'));
    this.game.load.image('apple_low_x', require('../../../assets/games/appleDrop/apple_low_x.png'));
    this.game.load.image('apple_low_y', require('../../../assets/games/appleDrop/apple_low_y.png'));
    this.game.load.image('apple_low_z', require('../../../assets/games/appleDrop/apple_low_z.png'));

    this.game.load.image('twigs_cap_a', require('../../../assets/games/appleDrop/twigs_cap_a.png'));
    this.game.load.image('twigs_cap_b', require('../../../assets/games/appleDrop/twigs_cap_b.png'));
    this.game.load.image('twigs_cap_c', require('../../../assets/games/appleDrop/twigs_cap_c.png'));
    this.game.load.image('twigs_cap_d', require('../../../assets/games/appleDrop/twigs_cap_d.png'));
    this.game.load.image('twigs_cap_e', require('../../../assets/games/appleDrop/twigs_cap_e.png'));
    this.game.load.image('twigs_cap_f', require('../../../assets/games/appleDrop/twigs_cap_f.png'));
    this.game.load.image('twigs_cap_g', require('../../../assets/games/appleDrop/twigs_cap_g.png'));
    this.game.load.image('twigs_cap_h', require('../../../assets/games/appleDrop/twigs_cap_h.png'));
    this.game.load.image('twigs_cap_i', require('../../../assets/games/appleDrop/twigs_cap_i.png'));
    this.game.load.image('twigs_cap_j', require('../../../assets/games/appleDrop/twigs_cap_j.png'));
    this.game.load.image('twigs_cap_k', require('../../../assets/games/appleDrop/twigs_cap_k.png'));
    this.game.load.image('twigs_cap_l', require('../../../assets/games/appleDrop/twigs_cap_l.png'));
    this.game.load.image('twigs_cap_m', require('../../../assets/games/appleDrop/twigs_cap_m.png'));
    this.game.load.image('twigs_cap_n', require('../../../assets/games/appleDrop/twigs_cap_n.png'));
    this.game.load.image('twigs_cap_o', require('../../../assets/games/appleDrop/twigs_cap_o.png'));
    this.game.load.image('twigs_cap_p', require('../../../assets/games/appleDrop/twigs_cap_p.png'));
    this.game.load.image('twigs_cap_q', require('../../../assets/games/appleDrop/twigs_cap_q.png'));
    this.game.load.image('twigs_cap_r', require('../../../assets/games/appleDrop/twigs_cap_r.png'));
    this.game.load.image('twigs_cap_s', require('../../../assets/games/appleDrop/twigs_cap_s.png'));
    this.game.load.image('twigs_cap_t', require('../../../assets/games/appleDrop/twigs_cap_t.png'));
    this.game.load.image('twigs_cap_u', require('../../../assets/games/appleDrop/twigs_cap_u.png'));
    this.game.load.image('twigs_cap_v', require('../../../assets/games/appleDrop/twigs_cap_v.png'));
    this.game.load.image('twigs_cap_w', require('../../../assets/games/appleDrop/twigs_cap_w.png'));
    this.game.load.image('twigs_cap_x', require('../../../assets/games/appleDrop/twigs_cap_x.png'));
    this.game.load.image('twigs_cap_y', require('../../../assets/games/appleDrop/twigs_cap_y.png'));
    this.game.load.image('twigs_cap_z', require('../../../assets/games/appleDrop/twigs_cap_z.png'));

    this.game.load.image('twigs_low_a', require('../../../assets/games/appleDrop/twigs_low_a.png'));
    this.game.load.image('twigs_low_b', require('../../../assets/games/appleDrop/twigs_low_b.png'));
    this.game.load.image('twigs_low_c', require('../../../assets/games/appleDrop/twigs_low_c.png'));
    this.game.load.image('twigs_low_d', require('../../../assets/games/appleDrop/twigs_low_d.png'));
    this.game.load.image('twigs_low_e', require('../../../assets/games/appleDrop/twigs_low_e.png'));
    this.game.load.image('twigs_low_f', require('../../../assets/games/appleDrop/twigs_low_f.png'));
    this.game.load.image('twigs_low_g', require('../../../assets/games/appleDrop/twigs_low_g.png'));
    this.game.load.image('twigs_low_h', require('../../../assets/games/appleDrop/twigs_low_h.png'));
    this.game.load.image('twigs_low_i', require('../../../assets/games/appleDrop/twigs_low_i.png'));
    this.game.load.image('twigs_low_j', require('../../../assets/games/appleDrop/twigs_low_j.png'));
    this.game.load.image('twigs_low_k', require('../../../assets/games/appleDrop/twigs_low_k.png'));
    this.game.load.image('twigs_low_l', require('../../../assets/games/appleDrop/twigs_low_l.png'));
    this.game.load.image('twigs_low_m', require('../../../assets/games/appleDrop/twigs_low_m.png'));
    this.game.load.image('twigs_low_n', require('../../../assets/games/appleDrop/twigs_low_n.png'));
    this.game.load.image('twigs_low_o', require('../../../assets/games/appleDrop/twigs_low_o.png'));
    this.game.load.image('twigs_low_p', require('../../../assets/games/appleDrop/twigs_low_p.png'));
    this.game.load.image('twigs_low_q', require('../../../assets/games/appleDrop/twigs_low_q.png'));
    this.game.load.image('twigs_low_r', require('../../../assets/games/appleDrop/twigs_low_r.png'));
    this.game.load.image('twigs_low_s', require('../../../assets/games/appleDrop/twigs_low_s.png'));
    this.game.load.image('twigs_low_t', require('../../../assets/games/appleDrop/twigs_low_t.png'));
    this.game.load.image('twigs_low_u', require('../../../assets/games/appleDrop/twigs_low_u.png'));
    this.game.load.image('twigs_low_v', require('../../../assets/games/appleDrop/twigs_low_v.png'));
    this.game.load.image('twigs_low_w', require('../../../assets/games/appleDrop/twigs_low_w.png'));
    this.game.load.image('twigs_low_x', require('../../../assets/games/appleDrop/twigs_low_x.png'));
    this.game.load.image('twigs_low_y', require('../../../assets/games/appleDrop/twigs_low_y.png'));
    this.game.load.image('twigs_low_z', require('../../../assets/games/appleDrop/twigs_low_z.png'));

    this.game.load.image('bag_cl01_front', require('../../../assets/games/appleDrop/bag_cl01_front.png'));
    this.game.load.image('bag_cl01_back', require('../../../assets/games/appleDrop/bag_cl01_back.png'));
    this.game.load.image('word_box', require('../../../assets/games/appleDrop/word_box.jpg'));
    this.game.load.image('life', require('../../../assets/games/appleDrop/live.png'));
    this.game.load.spritesheet('worm_spritesheet', require('../../../assets/games/appleDrop/worm_spritesheet.png'), 113, 122, 351);

    //retrieved from https://loonride.com/tools/physics
    this.game.load.physics("bag_front", "https://firebasestorage.googleapis.com/v0/b/loon-ride-webpage.appspot.com/o/o26rWM9ZeeOsA5Q5M4AF4dTvdfs1%2Fjson%2F-KulmurpN-Vkesu7j3PU?alt=media&token=d3bd4ea2-19db-48ac-87b3-604402a1270d");
    this.game.load.physics("apple", "https://loonride.com/data/p2/-KulmurpN-Vkesu7j3PU");
    
  }

  create(){
    this.vocabRemaining = _.cloneDeep(this.vocabFull);
    this.arrowKeys = this.game.input.keyboard.createCursorKeys();
    
    this.setBackground();
    this.setPhysics();
    this.setCollisionGroups();
    this.setLives();
    this.setBoundaries();
    this.displayBag();
    this.getNewWord();
    this.displayStartDialog();
  }

  setPhysics() {
    //  Enable P2
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.gravity.y = 50;

    //  Turn on impact events for the world, without this we get no collision callbacks
    this.game.physics.p2.setImpactEvents(true);

    this.game.physics.p2.restitution = 0.4;
  }

  getBranchLetters() {
    this.treeLetters = this.game.add.group();
    for(let letter of this.word) {
      let treeLetter;
      if (letter === letter.toUpperCase()) treeLetter = this.treeLetters.create(this.treeLetters.width, 37, 'twigs_cap_' + _.toLower(letter));
      else treeLetter = this.treeLetters.create(this.treeLetters.width, 50, 'twigs_low_' + letter);
      treeLetter.alpha = 0;
    }
    this.treeLetters.x = this.game.width/2 - this.treeLetters.width/2
  }

  setLives() {
     this.livesGroup = this.game.add.group();
     
      //  Create our bag_front sprite
      for( let i = 0; i < 3; i++) {
        const life = this.livesGroup.create((i * 50) + (i * 10)+ 75 , 50, 'life');
        this.game.physics.p2.enable(life);
        life.body.setCollisionGroup(this.livesCollisionGroup);
        life.body.kinematic = true;
      }
  }

  displayTreeLetter() {
    this.treeLetters.children[this.letterIndex].scale.setTo(0.1);
    this.treeLetters.children[this.letterIndex].alpha = 1;
    let tween = this.game.add.tween( this.treeLetters.children[this.letterIndex].scale).to({x: 1.0, y: 1.0}, 3000, Phaser.Easing.Exponential.InOut, true);
    tween.onComplete.add(() => { 
      if(this.letterIndex == this.word.length) this.levelOver();
    });
  }

  levelOver() {
    this.letterIndex = 0;
    this.getNewWord();
    this.displayStartDialog();
  }

  setBoundaries() {
    // Define a block using bitmap data rather than an image sprite
    var floorShape = this.game.add.bitmapData(this.game.width, 50);
    
    // Fill the block with black color
    floorShape.ctx.rect(0, 0, this.game.width, 50);
    floorShape.ctx.fillStyle = '000';
    floorShape.ctx.fill();

    // // Create a new sprite using the bitmap data
    const floor = this.game.add.sprite(this.game.width/2, 1200, floorShape);
    this.game.physics.p2.enable(floor, true);

    floor.body.data.sensor = true;

    //  Set the bag_fronts collision group
    floor.body.setCollisionGroup(this.floorCollisionGroup);
    floor.body.collides(this.appleCollisionGroup, this.onAppleHitFloor, this);
    floor.body.kinematic = true;

    // // Create a new sprite using the bitmap data
    const ceiling = this.game.add.sprite(this.game.width/2, -25, floorShape);
    this.game.physics.p2.enable(ceiling, true);

    ceiling.body.data.sensor = true;

    //  Set the bag_fronts collision group
    ceiling.body.setCollisionGroup(this.floorCollisionGroup);
    ceiling.body.collides(this.appleCollisionGroup, function(){}, this);
    ceiling.body.kinematic = true;

    var wallShape = this.game.add.bitmapData(50, this.game.height + 50);
    // Fill the block with black color
    floorShape.ctx.rect(0, 0, 50, this.game.height + 50);
    floorShape.ctx.fillStyle = '000';
    floorShape.ctx.fill();

    // // Create a new sprite using the bitmap data
    const leftWall = this.game.add.sprite(-25, this.game.height/2, wallShape);
    this.game.physics.p2.enable(leftWall, true);

    leftWall.body.data.sensor = true;

    //  Set the bs collision group
    leftWall.body.setCollisionGroup(this.floorCollisionGroup);
    leftWall.body.collides(this.appleCollisionGroup, function(){}, this);
    leftWall.body.kinematic = true;

    const rightWall = this.game.add.sprite(this.game.width + 25, this.game.height/2, wallShape);
    this.game.physics.p2.enable(rightWall, true);

    rightWall.body.data.sensor = true;

    //  Set the bagFronts collision group
    rightWall.body.setCollisionGroup(this.floorCollisionGroup);
    rightWall.body.collides(this.appleCollisionGroup, function(){}, this);
    rightWall.body.kinematic = true;
 }

 onAppleHitFloor(obj1, obj2) {
  if (obj2.sprite) this.destroyApple(obj2); 
 }

  setCollisionGroups() {
     //  Create our collision groups. One for the player, one for the pandas
     this.bagCollisionGroup = this.game.physics.p2.createCollisionGroup();
     this.appleCollisionGroup = this.game.physics.p2.createCollisionGroup();
     this.floorCollisionGroup = this.game.physics.p2.createCollisionGroup();
     this.livesCollisionGroup = this.game.physics.p2.createCollisionGroup();
  }

  destroyApple(apple) {

    apple.sprite.destroy();
    this.appleCount--;
    if(!this.appleCount && !this.correctAppleInBag && !this.incorrectAppleInBag) {
      this.loseLife();
    }
    if (!this.appleCount && this.letterIndex < this.word.length) this.displayApples(this.getNextApples());
  }

  loseLife() {
    if(this.livesGroup.children[ this.livesGroup.children.length - 1 ]) this.livesGroup.children[ this.livesGroup.children.length - 1 ].destroy();
  }

  update() {
    if (this.arrowKeys.left.isDown && this.bagGroup.children[0].x >= 136)
    {
        this.bagVelocity -= 3;
    }
    else if (this.arrowKeys.right.isDown && this.bagGroup.children[0].x <= 1613)
    {
      this.bagVelocity += 3;
    }

    if (this.arrowKeys.up.isDown && this.bagGroup.children[0].x > 248)
    {
        this.bagVelocity -= 3;
    }
    else if (this.arrowKeys.down.isDown && this.bagGroup.children[0].x < 1510)
    {
      this.bagVelocity += 3;
    }
    else {
      if (this.bagVelocity < 0) this.bagVelocity += 1;
      if (this.bagVelocity > 0) this.bagVelocity -= 1;
    }

      this.bagFront.body.moveRight(this.bagVelocity);
      this.bagFront.body.angle = (this.game.width/2 -  this.bagFront.x)/100;
      this.bagFront.angle = (this.game.width/2 -  this.bagFront.x)/100;

      this.bagBack.body.moveRight(this.bagVelocity);
      this.bagBack.body.angle = (this.game.width/2 -  this.bagFront.x)/100;
      this.bagBack.angle = (this.game.width/2 -  this.bagFront.x)/100;

      this.bagSensor.body.x = this.bagFront.body.x +  (this.game.width/2 - this.bagFront.x)/65;
      this.bagSensor.body.angle = (this.game.width/2 -  this.bagFront.x)/100;
      this.bagSensor.angle = (this.game.width/2 -  this.bagFront.x)/100;

    if (this.bagGroup.children[0].x <= 136 && this.bagVelocity < 0) {
      this.bagVelocity *= -.80;
    }

    if (this.bagGroup.children[0].x >= 1613 && this.bagVelocity > 0) {
      this.bagVelocity *= -.80;
    }
  }

  displayBag() {

    this.bagGroup = this.game.add.group();
console.log('1');
    this.bagBack = this.bagGroup.create(this.game.width/2, 990, 'bag_cl01_back')
    // this.bagBack.x = this.bagBack.x - this.bagBack.width/2;
    this.game.physics.p2.enable(this.bagBack, false);
    this.bagBack.body.fixedRotation = true;
    console.log('2');
    
    //  Create our bagFront sprite
    this.bagFront = this.bagGroup.create(this.game.width/2, 990, 'bag_cl01_front');
    
    this.game.physics.p2.enable(this.bagFront, false);
    this.bagFront.body.fixedRotation = true;
    console.log('3');
    
    this.bagFront.body.clearShapes();
    this.bagFront.body.loadPolygon('bag_front', 'bag_front');
    this.bagFront.smoothed = false;

      // Define a block using bitmap data rather than an image sprite
      var blockShape = this.game.add.bitmapData(225, 40);
console.log('4');

      // Fill the block with black color
      blockShape.ctx.rect(0, 0, 225, 40);
      // blockShape.ctx.fillStyle = '000';
      // blockShape.ctx.fill();
console.log('5');

      // // Create a new sprite using the bitmap data
    this.bagSensor = this.bagGroup.create(this.game.width/2, 915, blockShape);
      this.game.physics.p2.enable(this.bagSensor, false);

      this.bagSensor.body.data.sensor = true;
      console.log('6');
      
      //  Set the bs collision group
      this.bagBack.body.setCollisionGroup(this.bagCollisionGroup);
      this.bagFront.body.setCollisionGroup(this.bagCollisionGroup);
      this.bagSensor.body.setCollisionGroup(this.bagCollisionGroup);
  
      this.bagSensor.body.collides(this.appleCollisionGroup, this.onAppleInBag, this);
console.log('7');

      //  When pandas collide with each other, nothing happens to them.
      this.bagFront.body.collides(this.appleCollisionGroup, function(){}, this);

      this.bagSensor.body.kinematic = true;
      this.bagFront.body.kinematic = true;
      this.bagBack.body.kinematic = true;
  }

  onAppleInBag(obj1, obj2) {
   if (obj2.sprite && obj2.sprite.letter == this.curLetter) {
    this.correctAppleInBag = true;
    this.displayTreeLetter();
    this.letterIndex++;
   }
   else if(obj2.sprite) {
    this.loseLife();
    this.incorrectAppleInBag = true;
    this.startWormAnim();
   }
   if(obj2.sprite) this.destroyApple(obj2);
  }

  startWormAnim() {
    this.worm = this.game.add.sprite(this.bagGroup.children[0].x, 800, 'worm_spritesheet');
    const flip = this.worm.animations.add('flip');
    flip.onComplete.add(this.wormFlipDone, this);

    let upTween = this.game.add.tween(this.worm).to({y: this.worm.y - 175}, 1000, Phaser.Easing.Linear.Out, true);

    upTween.onComplete.add(() => {
      flip.play(165);
    }, this);
    
  }

  wormFlipDone() {
    let downTween = this.game.add.tween(this.worm).to({y: this.game.height + 100}, 2750, Phaser.Easing.Linear.Out, true);

    downTween.onComplete.add(() => { 
      this.worm.destroy();
    }, this);
    // this.worm.y = 200;
    
  }

  getNextApples() {
    this.curLetter = this.word[this.letterIndex];
    if (this.word[this.letterIndex] === this.word[this.letterIndex].toUpperCase()) return this.getApples('cap');
    else return this.getApples('low');
  }

  displayApples(applesToDisplay) {  
    this.apples = this.game.add.group();

    const apple0 = this.apples.create( _.random(50, (this.game.width - 100)/3 - 50), _.random(75, 125), applesToDisplay[0].img);
    apple0.letter = applesToDisplay[0].letter
    const apple1 = this.apples.create( _.random((this.game.width- 100)/3 + 50, 2 * (this.game.width - 100)/3 - 50 ), _.random(75, 125), applesToDisplay[1].img);
    apple1.letter = applesToDisplay[1].letter
    const apple2 = this.apples.create( _.random(2 * (this.game.width - 100)/3 + 50, 3 * (this.game.width - 100)/3 - 50 ), _.random(75, 125), applesToDisplay[2].img);
    apple2.letter = applesToDisplay[2].letter

    this.appleCount = 3;
    this.incorrectAppleInBag = false;
    this.correctAppleInBag = false;

   for (let apple of this.apples.children){
    this.game.physics.p2.enable(apple, true);
    apple.body.clearShapes();
    apple.body.loadPolygon('apple', 'apple');
    
     apple.scale.setTo(0.1);
     apple.body.setCollisionGroup(this.appleCollisionGroup);
     apple.body.collides([this.appleCollisionGroup, this.bagCollisionGroup, this.floorCollisionGroup]);
     apple.body.data.gravityScale = 0;
     this.game.world.swap(apple, this.bagFront);
      let tween = this.game.add.tween(apple.scale).to({x: 1.0, y: 1.0}, 3000, Phaser.Easing.Exponential.InOut, true);
      tween.onComplete.add(() => {
      apple.body.data.gravityScale = _.random(50, 100)/100;
  }, this);
   }

  }

  getApples(capitalization) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    const apples = [];
    _.pull(letters, _.lowerCase(this.curLetter));
    apples.push({ letter: this.curLetter, img: 'apple_' + capitalization + '_' + _.lowerCase(this.curLetter) });

    for (let i = 0; i < 2; i++){
      let index = _.random(letters.length);
      let letter = letters.splice(index, 1)[0];
      apples.push({ letter: letter, img: 'apple_' + capitalization + '_' + letter })
    }
    return _.shuffle(apples);
  }

  getNewWord(){
    this.word = this.vocabRemaining.splice(_.random(this.vocabRemaining), 1)[0].word.split('');
  }

  setBackground(){
    // set the background
    const background = this.game.add.image(0, 0, 'background');
    background.scale.setTo(.88, .5);
  }

  displayStartDialog(){
    this.startDialog.wordBox = this.game.add.sprite(this.game.width/2, this.game.height/2, 'word_box');
    this.startDialog.wordBox.anchor.setTo(0.5);
    this.startDialog.wordBox.inputEnabled = true;
    this.startDialog.wordText = this.game.add.text(this.game.width/2, this.game.height/2 - 25, this.word.join(''), { 
      font: "50px Arial",
      fill: "#cd2f43",
      wordWrap: true,
      wordWrapWidth: this.startDialog.wordBox.width,
      align: "center"
    });
    this.startDialog.wordText.anchor.set(0.5);

    this.startDialog.startButton = this.game.add.button(this.game.width/2, this.game.height/2 + 75, 'word_box', this.onStartButton, this);
    this.startDialog.startButton.anchor.set(0.5);
    this.startDialog.startButton.scale.setTo(.25, .25);
    this.startDialog.text = this.game.add.text(this.game.width/2, this.game.height/2 + 75, 'Start', {
      font: "25px Arial",
      fill: "#cd2f43",
      wordWrap: true,
      wordWrapWidth: this.startDialog.startButton.width,
      align: "center"
    });
    this.startDialog.text.anchor.set(0.5);
  }

  onStartButton() {
    if(this.treeLetters && this.treeLetters.children) this.treeLetters.destroy();
    this.getBranchLetters();
    this.startDialog.wordText.alpha = 0;
    this.startDialog.wordBox.alpha = 0;
    this.startDialog.startButton.visible = false;
    this.startDialog.text.alpha = 0;
    const applesToDisplay = this.getNextApples();
    this.displayApples(applesToDisplay);
  }

}
