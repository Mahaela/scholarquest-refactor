import { Component, Input, Output, EventEmitter, ViewChild, AfterContentInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { MdGridList } from '@angular/material';

import { ButtonComponent } from '../button/button.component';

import { ApiService } from '../../utils/api.service';

@Component({
  selector: 'sq-button-grid-card',
  templateUrl: './button-grid-card.component.html',
  styleUrls: ['./button-grid-card.component.css']
})
export class ButtonGridCardComponent implements AfterContentInit, AfterViewInit{
  
    @Input('hoverColor') hoverColor: string = 'blue';
    @Input('selectedColor') selectedColor: string = 'green';
    @Input('backgroundColor') backgroundColor: string = 'grey';

    @Input('title') title: string;
    @Input('columns') columns: number = 4;
    @Input('options') options: any[];
    @Input('miniOptions') miniOptions: any[];
    @Input('patchValue') patchValue: string;
    @Input('initApi') initApi: string;

    @Output() buttonClicked = new EventEmitter<string>();
    @Output() miniButtonClicked = new EventEmitter<string>();

    @ViewChild('miniList') miniList: MdGridList;
    @ViewChild('normList') normList: MdGridList;

    private normTiles: any[];
    private miniTiles: any[]

    constructor(private apiService: ApiService, private renderer: Renderer){}

    /* 
     * get the initial data to set the selected button
     */ 

    ngAfterViewInit(){
      this.normTiles = this.normList._tiles.toArray();
      if(this.miniTiles) this.miniTiles = this.miniList._tiles.toArray();
    }

    ngAfterContentInit(){
      if(this.initApi) this.apiService.post(this.initApi).subscribe(
        (data) => {
        }
      )
    }

    setOptions(options: any){
      this.options = options;
    }

    /*
     * called when a button is clicked
     */  
    clicked(index: string){
       for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index) this.normTiles[i]._setStyle('background-color', this.selectedColor);
        else this.normTiles[i]._setStyle('background-color', null);
      }
    
      this.buttonClicked.emit(index);
    }

    miniClicked(index: string){
      this.miniButtonClicked.emit(index);
    }

    onMouseOverTile(index: string){
      for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index){
          this.normTiles[i]._setStyle('background-color', this.hoverColor);
        }
      }
    }

    onMouseLeaveTile(index: string){
      for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index){
          this.normTiles[i]._setStyle('background-color', null);
        }
      }
    }

    onMouseOverMiniTile(index: string){
      for(var i = 0; i < this.miniOptions.length; i++){
        if (this.miniOptions[i].index == index){
          this.miniTiles[i]._setStyle('background-color', this.hoverColor);
        }
      }
    }

    onMouseLeaveMiniTile(index: string){
      for(var i = 0; i < this.miniOptions.length; i++){
        if (this.miniOptions[i].index == index){
          this.miniTiles[i]._setStyle('background-color', null);
        }
      }
    }
}
