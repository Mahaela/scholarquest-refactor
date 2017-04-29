import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[sqHighlightMathBingo]'
})
export class HighlightMathBingoDirective {
    @Input() gameFinished = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    @HostListener('mouseenter')
    onMouseEnter(event: MouseEvent) {
        if (!this.elementRef.nativeElement.classList.contains('picked') && !this.gameFinished) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', 'hover');
        }
    }

    @HostListener('mouseleave')
    onMouseLeave(event: MouseEvent) {
        if (this.elementRef.nativeElement.id == 'hover' && !this.gameFinished) {
            this.renderer.setElementAttribute(this.elementRef.nativeElement, 'id', null);
        }
    }

}
