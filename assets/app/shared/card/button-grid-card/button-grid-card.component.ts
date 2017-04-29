import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, AfterContentInit } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

import { ApiService } from '../../utils/api.service';

@Component({
  selector: 'sq-button-grid-card',
  templateUrl: './button-grid-card.component.html',
  styleUrls: ['./button-grid-card.component.css']
})
export class ButtonGridCardComponent implements AfterContentInit{

    @Input('title') title: string;
    @Input('columns') columns: number = 4;
    @Input('options') options: any;
    @Input('patchValue') patchValue: string;
    @Input('initApi') initApi: string;

    @Output() buttonClicked = new EventEmitter<number>();

    @ViewChildren(ButtonComponent) buttons: QueryList<ButtonComponent>;

    constructor(private apiService: ApiService){}

    /* 
     * get the initial data to set the selected button
     */ 
    ngAfterContentInit(){
      if(this.initApi) this.apiService.post(this.initApi).subscribe(
        (data) => {
          this.buttons.forEach(button => {
            if(button.index == data[this.patchValue]) button.setSelected(true)
            }
          )
        }
      )
    }

    /*
     * called when a button is clicked
     */  
    clicked(index: number){

      var params= {}
      params[this.patchValue] = index;

      // // update the DB with the new value
      this.apiService.patch(params).subscribe();

      // let the parent know which button was selected
      this.buttonClicked.emit(index);

      this.buttons.forEach(button => {

        // if the button was previously selected, unselect it
        if(button.getSelected()) button.setSelected(false);
        
        if(button.index == index) button.setSelected(true);
      })
    }
}
