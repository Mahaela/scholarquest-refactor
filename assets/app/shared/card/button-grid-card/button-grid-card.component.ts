import { Component, Input, Output, EventEmitter, ViewChild, AfterContentInit, AfterViewInit, Renderer, ElementRef, AfterContentChecked } from '@angular/core';
import { MdGridList } from '@angular/material';

import { ApiService } from '../../utils/api.service';

@Component({
  selector: 'sq-button-grid-card',
  templateUrl: './button-grid-card.component.html',
  styleUrls: ['./button-grid-card.component.css']
})
export class ButtonGridCardComponent implements AfterContentInit, AfterContentChecked, AfterViewInit{
  
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

    normTiles: any[];
    miniTiles: any[];

    constructor(private apiService: ApiService, private renderer: Renderer){}

    ngAfterViewInit(){
      if(this.miniList) this.miniTiles = this.miniList._tiles.toArray();
    }

    ngAfterContentChecked(){
      if(this.normList._tiles) this.normTiles = this.normList._tiles.toArray();
    }

    /* 
     * get the initial data to set the selected button
     */ 
    ngAfterContentInit(){
      if(this.initApi) this.apiService.post(this.initApi).subscribe(
        (data) => {
        }
      )
    }

    /*
     * called when a button is clicked
     */  
    clicked(index: string){
       for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index) { 
          this.normTiles[i]._setStyle('background-color', this.selectedColor);
          this.normTiles[i].selected = true;
        }
        else{ 
          this.normTiles[i]._setStyle('background-color', null);
          this.normTiles[i].selected = null;
        }
      }
    
      this.buttonClicked.emit(index);
    }

    /*
     * mini button clicked
     */
    miniClicked(index: string){
      for(var i = 0; i < this.miniOptions.length; i++){
        if (this.miniOptions[i].index == index) { 
          this.miniTiles[i]._setStyle('background-color', this.selectedColor);
          this.miniTiles[i].selected = true;
        }
        else{ 
          this.miniTiles[i]._setStyle('background-color', null);
          this.miniTiles[i].selected = null;
        }
      }

      this.miniButtonClicked.emit(index);
    }

    /*
     * mouse over button 
     */
    onMouseOverTile(index: string){
      for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index && !this.normTiles[i].selected){
          this.normTiles[i]._setStyle('background-color', this.hoverColor);
        }
      }
    }

    /*
     * mouse leve the button 
     */
    onMouseLeaveTile(index: string){
      for(var i = 0; i < this.options.length; i++){
        if (this.options[i].index == index && !this.normTiles[i].selected){
          this.normTiles[i]._setStyle('background-color', null);
        }
      }
    }

    /*
     * mouse leve the button 
     */
    onMouseOverMiniTile(index: string){
      for(var i = 0; i < this.miniOptions.length; i++){
        if (this.miniOptions[i].index == index && !this.miniTiles[i].selected){
          this.miniTiles[i]._setStyle('background-color', this.hoverColor);
        }
      }
    }

    /*
     * mouse leve the button 
     */    
    onMouseLeaveMiniTile(index: string){
      for(var i = 0; i < this.miniOptions.length; i++){
        if (this.miniOptions[i].index == index && !this.miniTiles[i].selected){
          this.miniTiles[i]._setStyle('background-color', null);
        }
      }
    }
}
