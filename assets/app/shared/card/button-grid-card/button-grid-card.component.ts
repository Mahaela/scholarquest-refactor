import { Component, Input, Output, EventEmitter, ViewChild, Renderer, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { MdGridList } from '@angular/material';
import { ApiService } from '../../utils/api.service';

import * as _ from 'lodash';

@Component({
  selector: 'sq-button-grid-card',
  templateUrl: './button-grid-card.component.html',
  styleUrls: ['./button-grid-card.component.css']
})
export class ButtonGridCardComponent implements AfterViewInit {
  
    @Input('hoverColor') hoverColor: string = 'blue';
    @Input('selectedColor') selectedColor: string = 'green';
    @Input('backgroundColor') backgroundColor: string = 'grey';

    @Input('title') title: string;
    @Input('columns') columns: number = 4;
    @Input('options') options: any[];
    @Input('miniOptions') miniOptions: any[];
    @Input('patchValue') patchValue: string;
    @Input('initApi') initApi: string;
    @Input('selectedNorm') selectedNorm: string = '01';
    @Input('selectedMini') selectedMini: string;

    @Output() buttonClicked = new EventEmitter<string>();
    @Output() miniButtonClicked = new EventEmitter<string>();

    @ViewChild('miniList') miniList: MdGridList;
    @ViewChild('normList') normList: MdGridList;

    private normTiles: any[];
    private miniTiles: any[]

    constructor(private apiService: ApiService, private renderer: Renderer){}

    ngAfterViewInit(){
      this.normTiles = this.normList._element.nativeElement.children[0].children;
      if(this.miniList) this.miniTiles = this.miniList._element.nativeElement.children[0].children;
  }

    /*
     * called when a button is clicked
     */  
    clicked(index: string){
      this.selectedNorm = index;
      this.buttonClicked.emit(index);
    }

    miniClicked(index: string){
       for(var i = 0; i < this.options.length; i++){
        if (this.miniOptions[i].index == index) this.renderer.setElementStyle(this.miniTiles[i], 'background-color', this.selectedColor);
        else this.renderer.setElementStyle(this.miniTiles[i], 'background-color', null);
       }
      this.miniButtonClicked.emit(index);
    }

    onMouseOverTile(index: string){
      for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index){
          if(this.normTiles[i].style['background-color'] != this.selectedColor) this.renderer.setElementStyle(this.normTiles[i], 'background-color', this.hoverColor);
        }
      }
    }

    onMouseLeaveTile(index: string){
      for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index){
          if(this.normTiles[i].style['background-color'] != this.selectedColor) this.renderer.setElementStyle(this.normTiles[i], 'background-color', null);
        }
      }
    }

    onMouseOverMiniTile(index: string){
      for(var i = 0; i < this.miniOptions.length; i++){
        if (this.miniOptions[i].index == index){
          if(this.miniTiles[i].style['background-color'] != this.selectedColor) this.renderer.setElementStyle(this.miniTiles[i], 'background-color', this.hoverColor);          
       }
      }
    }

    onMouseLeaveMiniTile(index: string){
      for(var i = 0; i < this.miniOptions.length; i++){
        if (this.miniOptions[i].index == index){
          if(this.miniTiles[i].style['background-color'] != this.selectedColor) this.renderer.setElementStyle(this.miniTiles[i], 'background-color', null);
        }
      }
    }
}
