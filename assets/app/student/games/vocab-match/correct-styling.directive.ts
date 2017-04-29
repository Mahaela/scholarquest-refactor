import { Directive, ElementRef, Renderer, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[sqCorrectStyling]'
})
export class CorrectStylingDirective implements OnChanges{
    @Input('index') index: number;
    @Input('correctIndexes') correctIndexes: number[];
    constructor(private elementRef: ElementRef, private renderer: Renderer) {


    }

    ngOnChanges() {

        if (this.correctIndexes.length > 0) {
            if (this.correctIndexes.indexOf(this.index) > -1)
                this.renderer.setElementStyle(this.elementRef.nativeElement, 'border', 'solid green');
                this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen');
        }
    }
}
