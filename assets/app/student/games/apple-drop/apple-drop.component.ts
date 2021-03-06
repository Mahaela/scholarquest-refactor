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
  private apples = [];
  private bagFront;
  private bagBack;
  private arrowKeys;
  private curLetter;
  private livesGroup;
  private appleCount;
  private worm;
  private score = 0;
  private scoreText;
  private isGameOver = false;
  private gameOverDialog = {};
  
  private boundaryCollisionGroup;
  private appleCollisionGroup;
  private bagCollisionGroup;
  private bag = [];
  private armColliderRight;
  private armColliderLeft;
  private livesCollisionGroup
  private correctAppleInBag = false;
  private incorrectAppleInBag = false;
  private treeLetters;
  private wormDown = false;
  private gravity = 35;
  private bagSensor;
  private appleTweenTime = 3000;
  private defaultGravity = 35;
  private defaultAappleTweenTime = 3000;
  private gameReady = false;
  private coinsAnim;
  private isStartDialogDisplayed;
  private background;

  @ViewChild('game') gameController;

  constructor (private apiService: ApiService) {}

  /**
   * start the game
   */
  ngAfterViewInit(){
    this.game = new Phaser.Game(1355, 750, Phaser.AUTO, document.getElementById('phaser-game-parent'), { preload: this.preload, create: this.create.bind(this), update: this.update.bind(this)});
  }

  /**
   * load the background image
   */
  preload() {
    this.game.load.spritesheet('loading_spritesheet', require('../../../assets/games/loading_spritesheet.png'), 1355, 761, 8);
  }

  /**
   * do stuff before the assets load
   */
  create(){

    // display the background
    this.background = this.game.add.image(0, 0, 'loading_spritesheet');
    const load = this.background.animations.add('load');
    load.play(4, true);
    
    // after the assets load, display things
    this.game.load.onLoadComplete.add(this.onAssetsLoaded, this);

    // get the vocabulary to be used, and the skin color of the arms
    this.gameController.getVocabulary().subscribe(
      vocab => {
        this.apiService.post('avatar/getSkinColor', {}).subscribe(
          skinColor => {
            this.loadAssets(skinColor.skin);
          }
        )
    
        // get a copy of the vocabulary to be used
        this.vocabFull = vocab.vocab
        this.vocabRemaining = _.cloneDeep(this.vocabFull);

        // set the arrow keys as inputs
        this.arrowKeys = this.game.input.keyboard.createCursorKeys();
      },
      error => {}
    )
  }

  /**
   * once the assets load, display things
   */
  onAssetsLoaded() {
    this.background.destroy();
    this.setBackground();
    this.setPhysics();
    this.setCollisionGroups();
    this.displayLives();
    this.setBoundaries();
    this.displayBag();
    this.getNewWord();
    this.displayStartDialog();
    this.displayScoreText();
    this.gameReady = true;
  }

  /**
   * load assets
   * @param skinColor - the color of the arms/ hands 
   */
  async loadAssets(skinColor) {
    await this.game.load.image('apple_cap_a', require('../../../assets/games/appleDrop/apple_cap_a.png'));
    await this.game.load.image('apple_cap_b', require('../../../assets/games/appleDrop/apple_cap_b.png'));
    await this.game.load.image('apple_cap_c', require('../../../assets/games/appleDrop/apple_cap_c.png'));
    await this.game.load.image('apple_cap_d', require('../../../assets/games/appleDrop/apple_cap_d.png'));
    await this.game.load.image('apple_cap_e', require('../../../assets/games/appleDrop/apple_cap_e.png'));
    await this.game.load.image('apple_cap_f', require('../../../assets/games/appleDrop/apple_cap_f.png'));
    await this.game.load.image('apple_cap_g', require('../../../assets/games/appleDrop/apple_cap_g.png'));
    await this.game.load.image('apple_cap_h', require('../../../assets/games/appleDrop/apple_cap_h.png'));
    await this.game.load.image('apple_cap_i', require('../../../assets/games/appleDrop/apple_cap_i.png'));
    await this.game.load.image('apple_cap_j', require('../../../assets/games/appleDrop/apple_cap_j.png'));
    await this.game.load.image('apple_cap_k', require('../../../assets/games/appleDrop/apple_cap_k.png'));
    await this.game.load.image('apple_cap_l', require('../../../assets/games/appleDrop/apple_cap_l.png'));
    await this.game.load.image('apple_cap_m', require('../../../assets/games/appleDrop/apple_cap_m.png'));
    await this.game.load.image('apple_cap_n', require('../../../assets/games/appleDrop/apple_cap_n.png'));
    await this.game.load.image('apple_cap_o', require('../../../assets/games/appleDrop/apple_cap_o.png'));
    await this.game.load.image('apple_cap_p', require('../../../assets/games/appleDrop/apple_cap_p.png'));
    await this.game.load.image('apple_cap_q', require('../../../assets/games/appleDrop/apple_cap_q.png'));
    await this.game.load.image('apple_cap_r', require('../../../assets/games/appleDrop/apple_cap_r.png'));
    await this.game.load.image('apple_cap_s', require('../../../assets/games/appleDrop/apple_cap_s.png'));
    await this.game.load.image('apple_cap_t', require('../../../assets/games/appleDrop/apple_cap_t.png'));
    await this.game.load.image('apple_cap_u', require('../../../assets/games/appleDrop/apple_cap_u.png'));
    await this.game.load.image('apple_cap_v', require('../../../assets/games/appleDrop/apple_cap_v.png'));
    await this.game.load.image('apple_cap_w', require('../../../assets/games/appleDrop/apple_cap_w.png'));
    await this.game.load.image('apple_cap_x', require('../../../assets/games/appleDrop/apple_cap_x.png'));
    await this.game.load.image('apple_cap_y', require('../../../assets/games/appleDrop/apple_cap_y.png'));
    await this.game.load.image('apple_cap_z', require('../../../assets/games/appleDrop/apple_cap_z.png'));

    await this.game.load.image('apple_low_a', require('../../../assets/games/appleDrop/apple_low_a.png'));
    await this.game.load.image('apple_low_b', require('../../../assets/games/appleDrop/apple_low_b.png'));
    await this.game.load.image('apple_low_c', require('../../../assets/games/appleDrop/apple_low_c.png'));
    await this.game.load.image('apple_low_d', require('../../../assets/games/appleDrop/apple_low_d.png'));
    await this.game.load.image('apple_low_e', require('../../../assets/games/appleDrop/apple_low_e.png'));
    await this.game.load.image('apple_low_f', require('../../../assets/games/appleDrop/apple_low_f.png'));
    await this.game.load.image('apple_low_g', require('../../../assets/games/appleDrop/apple_low_g.png'));
    await this.game.load.image('apple_low_h', require('../../../assets/games/appleDrop/apple_low_h.png'));
    await this.game.load.image('apple_low_i', require('../../../assets/games/appleDrop/apple_low_i.png'));
    await this.game.load.image('apple_low_j', require('../../../assets/games/appleDrop/apple_low_j.png'));
    await this.game.load.image('apple_low_k', require('../../../assets/games/appleDrop/apple_low_k.png'));
    await this.game.load.image('apple_low_l', require('../../../assets/games/appleDrop/apple_low_l.png'));
    await this.game.load.image('apple_low_m', require('../../../assets/games/appleDrop/apple_low_m.png'));
    await this.game.load.image('apple_low_n', require('../../../assets/games/appleDrop/apple_low_n.png'));
    await this.game.load.image('apple_low_o', require('../../../assets/games/appleDrop/apple_low_o.png'));
    await this.game.load.image('apple_low_p', require('../../../assets/games/appleDrop/apple_low_p.png'));
    await this.game.load.image('apple_low_q', require('../../../assets/games/appleDrop/apple_low_q.png'));
    await this.game.load.image('apple_low_r', require('../../../assets/games/appleDrop/apple_low_r.png'));
    await this.game.load.image('apple_low_s', require('../../../assets/games/appleDrop/apple_low_s.png'));
    await this.game.load.image('apple_low_t', require('../../../assets/games/appleDrop/apple_low_t.png'));
    await this.game.load.image('apple_low_u', require('../../../assets/games/appleDrop/apple_low_u.png'));
    await this.game.load.image('apple_low_v', require('../../../assets/games/appleDrop/apple_low_v.png'));
    await this.game.load.image('apple_low_w', require('../../../assets/games/appleDrop/apple_low_w.png'));
    await this.game.load.image('apple_low_x', require('../../../assets/games/appleDrop/apple_low_x.png'));
    await this.game.load.image('apple_low_y', require('../../../assets/games/appleDrop/apple_low_y.png'));
    await this.game.load.image('apple_low_z', require('../../../assets/games/appleDrop/apple_low_z.png'));

    await this.game.load.image('twigs_cap_a', require('../../../assets/games/appleDrop/twigs_cap_a.png'));
    await this.game.load.image('twigs_cap_b', require('../../../assets/games/appleDrop/twigs_cap_b.png'));
    await this.game.load.image('twigs_cap_c', require('../../../assets/games/appleDrop/twigs_cap_c.png'));
    await this.game.load.image('twigs_cap_d', require('../../../assets/games/appleDrop/twigs_cap_d.png'));
    await this.game.load.image('twigs_cap_e', require('../../../assets/games/appleDrop/twigs_cap_e.png'));
    await this.game.load.image('twigs_cap_f', require('../../../assets/games/appleDrop/twigs_cap_f.png'));
    await this.game.load.image('twigs_cap_g', require('../../../assets/games/appleDrop/twigs_cap_g.png'));
    await this.game.load.image('twigs_cap_h', require('../../../assets/games/appleDrop/twigs_cap_h.png'));
    await this.game.load.image('twigs_cap_i', require('../../../assets/games/appleDrop/twigs_cap_i.png'));
    await this.game.load.image('twigs_cap_j', require('../../../assets/games/appleDrop/twigs_cap_j.png'));
    await this.game.load.image('twigs_cap_k', require('../../../assets/games/appleDrop/twigs_cap_k.png'));
    await this.game.load.image('twigs_cap_l', require('../../../assets/games/appleDrop/twigs_cap_l.png'));
    await this.game.load.image('twigs_cap_m', require('../../../assets/games/appleDrop/twigs_cap_m.png'));
    await this.game.load.image('twigs_cap_n', require('../../../assets/games/appleDrop/twigs_cap_n.png'));
    await this.game.load.image('twigs_cap_o', require('../../../assets/games/appleDrop/twigs_cap_o.png'));
    await this.game.load.image('twigs_cap_p', require('../../../assets/games/appleDrop/twigs_cap_p.png'));
    await this.game.load.image('twigs_cap_q', require('../../../assets/games/appleDrop/twigs_cap_q.png'));
    await this.game.load.image('twigs_cap_r', require('../../../assets/games/appleDrop/twigs_cap_r.png'));
    await this.game.load.image('twigs_cap_s', require('../../../assets/games/appleDrop/twigs_cap_s.png'));
    await this.game.load.image('twigs_cap_t', require('../../../assets/games/appleDrop/twigs_cap_t.png'));
    await this.game.load.image('twigs_cap_u', require('../../../assets/games/appleDrop/twigs_cap_u.png'));
    await this.game.load.image('twigs_cap_v', require('../../../assets/games/appleDrop/twigs_cap_v.png'));
    await this.game.load.image('twigs_cap_w', require('../../../assets/games/appleDrop/twigs_cap_w.png'));
    await this.game.load.image('twigs_cap_x', require('../../../assets/games/appleDrop/twigs_cap_x.png'));
    await this.game.load.image('twigs_cap_y', require('../../../assets/games/appleDrop/twigs_cap_y.png'));
    await this.game.load.image('twigs_cap_z', require('../../../assets/games/appleDrop/twigs_cap_z.png'));

    await this.game.load.image('twigs_low_a', require('../../../assets/games/appleDrop/twigs_low_a.png'));
    await this.game.load.image('twigs_low_b', require('../../../assets/games/appleDrop/twigs_low_b.png'));
    await this.game.load.image('twigs_low_c', require('../../../assets/games/appleDrop/twigs_low_c.png'));
    await this.game.load.image('twigs_low_d', require('../../../assets/games/appleDrop/twigs_low_d.png'));
    await this.game.load.image('twigs_low_e', require('../../../assets/games/appleDrop/twigs_low_e.png'));
    await this.game.load.image('twigs_low_f', require('../../../assets/games/appleDrop/twigs_low_f.png'));
    await this.game.load.image('twigs_low_g', require('../../../assets/games/appleDrop/twigs_low_g.png'));
    await this.game.load.image('twigs_low_h', require('../../../assets/games/appleDrop/twigs_low_h.png'));
    await this.game.load.image('twigs_low_i', require('../../../assets/games/appleDrop/twigs_low_i.png'));
    await this.game.load.image('twigs_low_j', require('../../../assets/games/appleDrop/twigs_low_j.png'));
    await this.game.load.image('twigs_low_k', require('../../../assets/games/appleDrop/twigs_low_k.png'));
    await this.game.load.image('twigs_low_l', require('../../../assets/games/appleDrop/twigs_low_l.png'));
    await this.game.load.image('twigs_low_m', require('../../../assets/games/appleDrop/twigs_low_m.png'));
    await this.game.load.image('twigs_low_n', require('../../../assets/games/appleDrop/twigs_low_n.png'));
    await this.game.load.image('twigs_low_o', require('../../../assets/games/appleDrop/twigs_low_o.png'));
    await this.game.load.image('twigs_low_p', require('../../../assets/games/appleDrop/twigs_low_p.png'));
    await this.game.load.image('twigs_low_q', require('../../../assets/games/appleDrop/twigs_low_q.png'));
    await this.game.load.image('twigs_low_r', require('../../../assets/games/appleDrop/twigs_low_r.png'));
    await this.game.load.image('twigs_low_s', require('../../../assets/games/appleDrop/twigs_low_s.png'));
    await this.game.load.image('twigs_low_t', require('../../../assets/games/appleDrop/twigs_low_t.png'));
    await this.game.load.image('twigs_low_u', require('../../../assets/games/appleDrop/twigs_low_u.png'));
    await this.game.load.image('twigs_low_v', require('../../../assets/games/appleDrop/twigs_low_v.png'));
    await this.game.load.image('twigs_low_w', require('../../../assets/games/appleDrop/twigs_low_w.png'));
    await this.game.load.image('twigs_low_x', require('../../../assets/games/appleDrop/twigs_low_x.png'));
    await this.game.load.image('twigs_low_y', require('../../../assets/games/appleDrop/twigs_low_y.png'));
    await this.game.load.image('twigs_low_z', require('../../../assets/games/appleDrop/twigs_low_z.png'));

    switch (skinColor) {
      case '01':
        await this.game.load.image('bag_front', require('../../../assets/games/appleDrop/bag_cl01_front.png'));
        break;
      case '02':
        await this.game.load.image('bag_front', require('../../../assets/games/appleDrop/bag_cl02_front.png'));
        break;
      case '03':
        await this.game.load.image('bag_front', require('../../../assets/games/appleDrop/bag_cl03_front.png'));
        break;
      case '04':
        await this.game.load.image('bag_front', require('../../../assets/games/appleDrop/bag_cl04_front.png'));
        break;
      case '05':
        await this.game.load.image('bag_front', require('../../../assets/games/appleDrop/bag_cl05_front.png'));
        break;
      case '06':
        await this.game.load.image('bag_front', require('../../../assets/games/appleDrop/bag_cl06_front.png'));
        break;
    }

    await this.game.load.image('bag_back', require('../../../assets/games/appleDrop/bag_back.png'));
    await this.game.load.image('word_box', require('../../../assets/games/appleDrop/word_box.jpg'));
    await this.game.load.image('life', require('../../../assets/games/appleDrop/live.png'));
    await this.game.load.image('background', require('../../../assets/games/appleDrop/background.jpg'));
    await this.game.load.spritesheet('worm_spritesheet', require('../../../assets/games/appleDrop/worm_spritesheet.png'), 68, 146, 351);
    
    //retrieved from https://loonride.com/tools/physics
    await this.game.load.physics("physics", "https://loonride.com/data/p2/-KvuM0Urb6tBpa8xydUw");
    this.game.load.start();
  }

  /**
   * display the score text
   */
  displayScoreText() {
  this.scoreText =  this.game.add.text(this.game.width - 40, 40, 'SCORE: ' + this.score, { 
    font: "40px Arial",
    fill: "#cd2f43",
    align: "center"
  });
  this.scoreText.anchor.setTo(1, .5);
  }

  /**
   * when the sidenav is opened, pause the game
   */
  pauseGame() {
    this.game.paused = true;
  }

  /**
   * when the sidenav is closed, pause the game
   */
  playGame() {
    this.game.paused = false;
  }

  /**
   * if a new grade level is selected in the sidenav, change the vocabulary, and reset the game
   * @param event 
   */
  changeGradeLevel(event) {
    this.vocabFull = event;

    // remove the life images
    for(let i = this.livesGroup.children.length - 1; i >= 0; i--) {
      if(this.livesGroup.children[i]) {
        this.livesGroup.children[i].destroy();
      }
    }

    // if the game over dialog is showing, remove it
    if (this.isGameOver) {
     this.removeGameOverDialog();
     this.isGameOver = false;
    }
      
    // if the start dialog is showing, remove it
    else if(this.isStartDialogDisplayed) {
      this.isStartDialogDisplayed = false;
      this.removeStartDialog();
    }

    // reset the game
    this.reset();
  }

  // initial setup of the physics system
  setPhysics() {
    //  Enable P2
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.gravity.y = this.gravity;

    //  Turn on impact events for the world, without this we get no collision callbacks
    this.game.physics.p2.setImpactEvents(true);

    // how bouncy physics bodies are
    this.game.physics.p2.restitution = 0.4;
  }

  /**
   * spell out the active word in the branch letters, then hide it
   */
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

  /**
   * display the lives images
   */
  displayLives() {
     this.livesGroup = this.game.add.group();
     
      //  Create our bag_front sprite
      for( let i = 0; i < 3; i++) {
        const life = this.livesGroup.create((i * 45) + 50, 40, 'life');
        this.game.physics.p2.enable(life);
        life.body.setCollisionGroup(this.livesCollisionGroup);
        life.body.kinematic = true;
      }
  }

  /**
   * when a correct apple is in the bag, show the corresponding letter in the tree
   */
  displayTreeLetter() {
    this.treeLetters.children[this.letterIndex].scale.setTo(0.1);
    this.treeLetters.children[this.letterIndex].alpha = 1;
    let tween = this.game.add.tween(this.treeLetters.children[this.letterIndex].scale).to({x: 1.0, y: 1.0}, 3000, Phaser.Easing.Exponential.InOut, true);
  }

  /**
   * after the letter has been spelled out, start a new level
   */
  levelOver() {
    this.score += 20;
    this.updateScoreText();
    this.letterIndex = 0;
    this.gravity += 15;
    this.appleTweenTime > 250 ? this.appleTweenTime -= 250 : this.appleTweenTime = 250;
    this.game.physics.p2.gravity.y = this.gravity;
    this.getNewWord();
    this.displayStartDialog();
  }

  /**
   * update the scpre text
   */
  updateScoreText() {
    this.scoreText.text = 'SCORE: ' + this.score;
  }

  /**
   * set the ceiling and wall colliders
   */
  setBoundaries() {

    // set the cieling collider
    const ceilingShape = this.game.add.bitmapData(this.game.width + 500, 50);
    const ceiling = this.game.add.sprite(this.game.width/2, -25, ceilingShape);
    this.game.physics.p2.enable(ceiling, false);
    ceiling.body.data.sensor = true;
    ceiling.body.setCollisionGroup(this.boundaryCollisionGroup);
    ceiling.body.collides(this.appleCollisionGroup, function(){}, this);
    ceiling.body.kinematic = true;

    // set the left wall collider
    const wallShape = this.game.add.bitmapData(50, this.game.height + 50);
    const leftWall = this.game.add.sprite(-25, this.game.height/2 - 150, wallShape);
    this.game.physics.p2.enable(leftWall, true);
    leftWall.body.data.sensor = true;
    leftWall.body.setCollisionGroup(this.boundaryCollisionGroup);
    leftWall.body.collides(this.appleCollisionGroup, function(){}, this);
    leftWall.body.kinematic = true;

    // set the right wall collider
    const rightWall = this.game.add.sprite(this.game.width + 25, this.game.height/2 - 150, wallShape);
    this.game.physics.p2.enable(rightWall, true);
    rightWall.body.data.sensor = true;
    rightWall.body.setCollisionGroup(this.boundaryCollisionGroup);
    rightWall.body.collides(this.appleCollisionGroup, function(){}, this);
    rightWall.body.kinematic = true;
  }

  // create collision groups
  setCollisionGroups() {
    //  Create our collision groups. One for the player, one for the pandas
    this.bagCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.appleCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.boundaryCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.livesCollisionGroup = this.game.physics.p2.createCollisionGroup();
  }

  /**
   * destroy an apple
   * @param apple - the apple to destroy
   */
  destroyApple(apple) {
    apple.destroy();
    this.appleCount--;

    // if all of the apple hit the floor, lose a life
    if(!this.appleCount && !this.correctAppleInBag && !this.incorrectAppleInBag) {
      this.loseLife();
    }

    // if there are still letters left in the word, display the next apples, otherwise start the next level
    if (!this.appleCount && this.letterIndex < this.word.length) this.displayApples(this.getNextApples());
    else if(!this.appleCount && this.letterIndex == this.word.length) this.levelOver();
  }

  /**
   * remove a life image
   */
  loseLife() {
    const livesLeft = this.livesGroup.children.length - 1
    if(this.livesGroup.children[ livesLeft ]) this.livesGroup.children[ livesLeft ].destroy();
    if(!livesLeft) this.gameOver();
  }

  /**
   * display the game over dialog if there are no more lives left
   */
  gameOver() {
    this.isGameOver = true;

    this.gameOverDialog.dialog = this.game.add.sprite(this.game.width/2, this.game.height/2, 'word_box');
    this.gameOverDialog.dialog.scale.setTo(1.25, 1.4);
    this.gameOverDialog.dialog.anchor.setTo(0.5);
    this.gameOverDialog.dialog.inputEnabled = true;
    this.gameOverDialog.dialogText = this.game.add.text(this.game.width/2, this.game.height/2 - 50, `GAME OVER\nYou Won\n${this.score} Coins`, { 
      font: "50px Arial",
      fill: "#cd2f43",
      wordWrap: true,
      wordWrapWidth: this.gameOverDialog.dialog.width,
      align: "center"
    });
    this.gameOverDialog.dialogText.anchor.set(0.5);

    this.gameOverDialog.playAgainButton = this.game.add.button(this.game.width/2, this.game.height/2 + 100, 'word_box', this.onPlayAgainButton, this);
    this.gameOverDialog.playAgainButton.anchor.set(0.5);
    this.gameOverDialog.playAgainButton.scale.setTo(.4, .25);
    this.gameOverDialog.buttonText = this.game.add.text(this.game.width/2, this.game.height/2 + 100, 'Play Again', {
      font: "25px Arial",
      fill: "#cd2f43",
      wordWrap: true,
      wordWrapWidth: this.gameOverDialog.playAgainButton.width,
      align: "center"
    });
    this.gameOverDialog.buttonText.anchor.set(0.5);
  }

  /**
   * if the play again button is pressed, reset the game
   */
  onPlayAgainButton() {
    // reset the game
    this.vocabRemaining = _.cloneDeep(this.vocabFull);
    this.removeGameOverDialog();
    this.reset();
    this.isGameOver = false;
  }

  /**
   * reset the game
   */
  reset() {
    // destroy any active levels
    for(let apple of this.apples) {
      if(apple.alive) apple.destroy();
    }
    this.game.tweens.removeAll();
    this.displayLives();
    this.getNewWord();
    this.displayStartDialog();
    this.score = 0;
    this.updateScoreText();
    this.letterIndex = 0;
    if(this.treeLetters && this.treeLetters.children) this.treeLetters.destroy();
    this.getBranchLetters();
    this.appleTweenTime = this.defaultAappleTweenTime;
    this.gravity = this.defaultGravity;
    this.game.physics.p2.gravity.y = this.gravity;
  }

  /**
   * remove the game over dialog
   */
  removeGameOverDialog() {
    this.gameOverDialog.dialog.destroy();
    this.gameOverDialog.dialogText.destroy();
    this.gameOverDialog.playAgainButton.destroy();
    this.gameOverDialog.buttonText.destroy();
  }

  /**
   * move the bag each update
   */
  update() {
    if(!this.gameReady) return;
    if( !this.isGameOver) {
    
      for(let apple of this.apples) {
        if(apple.alive && apple.y > this.game.height + 150) {
          this.destroyApple(apple);
        }
      }

      if (this.arrowKeys.left.isDown && this.bagFront.x >= 108)
      {
          this.bagVelocity -= 2;
      }
      else if (this.arrowKeys.right.isDown && this.bagFront.x <= 1245)
      {
        this.bagVelocity += 2;
      }
      else {
        if (this.bagVelocity < 0) this.bagVelocity += .75;
        if (this.bagVelocity > 0) this.bagVelocity -= .75;
      }
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
    
    if (this.bagFront.x <= 108 && this.bagVelocity < 0) {
      this.bagVelocity *= -.80;
    }

    if (this.bagFront.x >= 1245 && this.bagVelocity > 0) {
      this.bagVelocity *= -.80;
    }
  }

  /**
   * dispay the bag
   */
  displayBag() {

    // display the bag
    this.bagBack = this.game.add.sprite(this.game.width/2, 745, 'bag_back')
    this.game.physics.p2.enable(this.bagBack, false);
    this.bagBack.body.fixedRotation = true;
    
    //  display the front of the bag
    this.bagFront = this.game.add.sprite(this.game.width/2, 745, 'bag_front');
    this.game.physics.p2.enable(this.bagFront, false);
    this.bagFront.body.fixedRotation = true;
    
    this.bagFront.body.clearShapes();
    this.bagFront.body.loadPolygon('physics', 'bag_front');

    // set the bag sensor
    var blockShape = this.game.add.bitmapData(50, 35);
    blockShape.ctx.rect(0, 0, 50, 35);
    this.bagSensor = this.game.add.sprite(this.game.width/2, 695, blockShape);
    this.game.physics.p2.enable(this.bagSensor, false);
    this.bagSensor.body.data.sensor = true;
    
    //  Set the bag collisions
    this.bagBack.body.setCollisionGroup(this.bagCollisionGroup);
    this.bagFront.body.setCollisionGroup(this.bagCollisionGroup);
    this.bagSensor.body.setCollisionGroup(this.bagCollisionGroup);
    this.bagSensor.body.collides(this.appleCollisionGroup, this.onAppleInBag, this);
    this.bagFront.body.collides(this.appleCollisionGroup, function(){}, this);

    // make the bag resistant to physics
    this.bagSensor.body.kinematic = true;
    this.bagFront.body.kinematic = true;
    this.bagBack.body.kinematic = true;
  }

  /**
   * logic when an apple goes in the bag
   * @param obj1 - the bag
   * @param obj2 - the apple
   */
  onAppleInBag(obj1, obj2) {

   // logic if the apple is the correct apple, or the incorrect apple
   if (obj2.sprite && obj2.sprite.letter == this.curLetter && !this.incorrectAppleInBag) {
    this.score += 5;
    this.updateScoreText();
    this.correctAppleInBag = true;
    this.displayTreeLetter();
    this.letterIndex++;
   }
   else if(obj2.sprite && !this.incorrectAppleInBag && !this.correctAppleInBag) {
    this.loseLife();
    this.incorrectAppleInBag = true;
    this.startWormAnim();
   }
   if(obj2.sprite) this.destroyApple(obj2.sprite);
  }

  /**
   * if the wrong apple went in the bag, display the worm animatino
   */
  startWormAnim() {
    this.worm = this.game.add.sprite(this.bagFront.x, 600, 'worm_spritesheet');
    this.wormDown = false;
    
    // do swapping so that the worm is always in front of apples, behind the bag on its way up, and in front of the bag on its way down
    const flip = this.worm.animations.add('flip');
    flip.onComplete.add(this.wormFlipDone, this);
    this.game.world.swap(this.worm, this.bagFront);

    // move the worm up
    let upTween = this.game.add.tween(this.worm).to({y: this.worm.y - 175}, 500, Phaser.Easing.Linear.Out, true);

    // when the worm is done moving up do a flip
    upTween.onComplete.add(() => {
      this.wormDown = true;
      this.game.world.swap(this.worm, this.bagFront);

      // play the flip animation
      flip.play(165);
    }, this);
    
  }

  /**
   * when the worm is done with its flip, the worm moves down
   */
  wormFlipDone() {
    let downTween = this.game.add.tween(this.worm).to({y: this.game.height + 100}, 2750, Phaser.Easing.Linear.Out, true);

    // destroy the worm when it is done moving down
    downTween.onComplete.add(() => { 
      this.worm.destroy();
    }, this);
  }

  /**
   * get the next apples that will be displayed
   */
  getNextApples() {
    this.curLetter = this.word[this.letterIndex];
    // get capital or lowercase apples
    if (this.word[this.letterIndex] === this.word[this.letterIndex].toUpperCase()) return this.getApples('cap');
    else return this.getApples('low');
  }

  /**
   * display apples
   * @param applesToDisplay - the apples to display
   */
  displayApples(applesToDisplay) {  
    if(this.isGameOver) return;

    // randomize the location of the apples
    const apple0 = this.game.add.sprite( _.random(150, (this.game.width - 100)/3 - 50), _.random(75, 125), applesToDisplay[0].img);
    apple0.letter = applesToDisplay[0].letter
    const apple1 = this.game.add.sprite( _.random((this.game.width- 100)/3 + 50, 2 * (this.game.width - 100)/3 - 50), _.random(75, 125), applesToDisplay[1].img);
    apple1.letter = applesToDisplay[1].letter
    const apple2 = this.game.add.sprite( _.random(2 * (this.game.width - 100)/3 + 50, this.game.width - 100), _.random(75, 125), applesToDisplay[2].img);
    apple2.letter = applesToDisplay[2].letter

    this.apples = [apple0, apple1, apple2];

    this.appleCount = 3;
    this.incorrectAppleInBag = false;
    this.correctAppleInBag = false;

   // set the physics for the apples
   for (let apple of this.apples){
    this.game.physics.p2.enable(apple, false);
    apple.body.clearShapes();
    apple.body.loadPolygon('physics', 'apple');
    
    apple.scale.setTo(0.1);
    apple.body.setCollisionGroup(this.appleCollisionGroup);
    apple.body.collides([this.appleCollisionGroup, this.bagCollisionGroup, this.boundaryCollisionGroup]);
    apple.body.data.gravityScale = 0;
    if (this.worm && this.worm.alive && this.wormDown) this.game.world.swap(apple, this.worm)
    this.game.world.swap(apple, this.bagFront);
    if (this.worm && this.worm.alive && !this.wormDown) this.game.world.swap(apple, this.worm);

    // apple grow tween
    let tween = this.game.add.tween(apple.scale).to({x: 1.0, y: 1.0}, this.appleTweenTime, Phaser.Easing.Exponential.InOut, true);
      tween.onComplete.add(() => {
        // after the apple is done growing, apply gravity to it
        apple.body.data.gravityScale = _.random(50, 100)/100;
    }, this);
   }
  }

  /**
   * get the apples that will be displayed for a letter in the word
   * @param capitalization 
   */
  getApples(capitalization) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    const apples = [];
    _.pull(letters, _.lowerCase(this.curLetter));
    apples.push({ letter: this.curLetter, img: 'apple_' + capitalization + '_' + _.lowerCase(this.curLetter) });

    for (let i = 0; i < 2; i++){
      let index = _.random(letters.length - 1);
      let letter = letters.splice(index, 1)[0];
      apples.push({ letter: letter, img: 'apple_' + capitalization + '_' + letter })
    }

    // randomize the apples so that the correct apple is not always in the same place
    return _.shuffle(apples);
  }

  /**
   * get a new active word
   */
  getNewWord(){
    if (this.vocabRemaining.length == 0) this.vocabRemaining = _.cloneDeep(this.vocabFull);
    this.word = this.vocabRemaining.splice(_.random(this.vocabRemaining.length - 1), 1)[0].word.split('');
  }

  /**
   * set the background of the game
   */
  setBackground(){
    // set the background
    const background = this.game.add.image(0, 0, 'background');
    background.scale.setTo(.68, .5);
  }

  /**
   * display the start dialog
   */
  displayStartDialog(){
    this.isStartDialogDisplayed = true;
    this.startDialog.dialog = this.game.add.sprite(this.game.width/2, this.game.height/2, 'word_box');
    this.startDialog.dialog.anchor.setTo(0.5);
    this.startDialog.dialog.inputEnabled = true;
    this.startDialog.dialogText = this.game.add.text(this.game.width/2, this.game.height/2 - 25, this.word.join(''), { 
      font: "50px Arial",
      fill: "#cd2f43",
      wordWrap: true,
      wordWrapWidth: this.startDialog.dialog.width,
      align: "center"
    });
    this.startDialog.dialogText.anchor.set(0.5);

    this.startDialog.startButton = this.game.add.button(this.game.width/2, this.game.height/2 + 75, 'word_box', this.onStartButton, this);
    this.startDialog.startButton.anchor.set(0.5);
    this.startDialog.startButton.scale.setTo(.25, .25);
    this.startDialog.buttonText = this.game.add.text(this.game.width/2, this.game.height/2 + 75, 'Start', {
      font: "25px Arial",
      fill: "#cd2f43",
      wordWrap: true,
      wordWrapWidth: this.startDialog.startButton.width,
      align: "center"
    });
    this.startDialog.buttonText.anchor.set(0.5);
  }

  /**
   * when the button to start a level is clicked, start the leve
   */
  onStartButton() {
    this.isStartDialogDisplayed = false;
    if(this.treeLetters && this.treeLetters.children) this.treeLetters.destroy();
    this.getBranchLetters();
    this.removeStartDialog();
    const applesToDisplay = this.getNextApples();
    this.displayApples(applesToDisplay);
  }

  /**
   * remove the start dialog
   */
  removeStartDialog() {
    this.startDialog.dialogText.destroy();
    this.startDialog.dialog.destroy();
    this.startDialog.startButton.destroy();
    this.startDialog.buttonText.destroy();
  }
}
