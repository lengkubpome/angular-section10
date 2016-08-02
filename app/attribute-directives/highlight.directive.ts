import { Directive, ElementRef, HostListener, Input, Attribute } from '@angular/core';
import { NgModel } from '@angular/common';


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


// UppercaseDirective
@Directive({
    selector: '[ngModel][uppercase]',
    host: {
        '(input)': 'onInputChange()'
    }
})
export class UppercaseDirective {
    constructor(public model: NgModel) { }
    onInputChange() {
        var newValue = this.model.value.toUpperCase();
        this.model.valueAccessor.writeValue(newValue);
        this.model.viewToModelUpdate(newValue);
    }
}
//Mask Directive
@Directive({
    selector: '[mask]',
    host: {
        '(keyup)': 'onInputChange()'
    }
})
export class MaskDirective {
    maskPattern: string;
    placeHolderCounts: number;
    dividers: string[];
    modelValue: string;
    viewValue: string;

    constructor(public model: NgModel, @Attribute("mask") maskPattern: string) {
        this.dividers = maskPattern.replace(/\*/g, "").split("");
        this.dividers.push(" ");
        this.generatePattern(maskPattern);
    }

    onInputChange() {
        this.modelValue = this.getModelValue();
        var stringToFormat = this.modelValue;
        if (stringToFormat.length < 10) {
            stringToFormat = this.padString(stringToFormat);
        }

        this.viewValue = this.format(stringToFormat);
        this.model.viewToModelUpdate(this.modelValue);
        this.model.valueAccessor.writeValue(this.viewValue)
    }

    generatePattern(patternString: any) {
        this.placeHolderCounts = (patternString.match(/\*/g) || []).length;
        for (var i = 0; i < this.placeHolderCounts; i++) {
            patternString = patternString.replace('*', "{" + i + "}");
        }
        this.maskPattern = patternString;
    }

    format(s: any) {
        var formattedString = this.maskPattern;
        for (var i = 0; i < this.placeHolderCounts; i++) {
            formattedString = formattedString.replace("{" + i + "}", s.charAt(i));
        }
        return formattedString;
    }

    padString(s: any) {
        var pad = "          ";
        return (s + pad).substring(0, pad.length);
    }

    getModelValue() {
        var modelValue = this.model.value;
        for (var i = 0; i < this.dividers.length; i++) {
            while (modelValue.indexOf(this.dividers[i]) > -1) {
                modelValue = modelValue.replace(this.dividers[i], "");
            }
        }
        return modelValue;
    }
}