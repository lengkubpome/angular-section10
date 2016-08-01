import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {
    private _defaultColor = 'red';
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input() set defaultColor(colorName: string) {
        this._defaultColor = colorName || this._defaultColor;
    }

    @Input('myHighlight') highlightColor: string;

    @HostListener('mouseenter') onmouseenter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }

}
