import { Component, Input, ElementRef, ViewChild, Renderer, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sq-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class ButtonComponent implements AfterViewInit{
  @Input('hoverColor') hoverColor: string = 'blue';
  @Input('selectedColor') selectedColor: string = 'green';
  @Input('backgroundColor') backgroundColor: string = 'grey';

  @ViewChild('buttonBackground') buttonBackground;

   private selected: boolean = false;

   constructor(private renderer: Renderer){}
  
  @Input('img') img : string; 
  @Input('index') index : number; 


 /*
  * set the background color to the hover color if it is being hovered on and it is not already selected
  */
  onMouseEnter(){
    // if (!this.selected) this.renderer.setElementStyle(this.buttonBackground.nativeElement, 'background-color', this.hoverColor);
  }

 /*
  * set the background color to the normal color if it is no longer being hovered on and it is not already selected
  */
  onMouseLeave(){
    // if (!this.selected) this.renderer.setElementStyle(this.buttonBackground.nativeElement, 'background-color', this.backgroundColor);
  }

 /*
  * set the background color
  */
  ngAfterViewInit(){
    // if (!this.selected) this.renderer.setElementStyle(this.buttonBackground.nativeElement, 'background-color', this.backgroundColor)

}

  /*
   * when a button is selected, the parent component calls this function. set the background color of the selected button to the selected color
   * set the previously selected button to the normal background color
   */
  setSelected(selected: boolean){
    // this.selected = selected;
    // if(selected) this.renderer.setElementStyle(this.buttonBackground.nativeElement, 'background-color', this.selectedColor);
    // else this.renderer.setElementStyle(this.buttonBackground.nativeElement, 'background-color', this.backgroundColor);
  }

  /*
   * tells the parent component if this button is the selected one
   */
  getSelected(): boolean{
     return this.selected
  }
}
