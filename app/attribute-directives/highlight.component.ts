import { Component } from '@angular/core';
import { HighlightDirective, UppercaseDirective, MaskDirective} from './highlight.directive';

@Component({
  selector: 'att-directive',
  template: `
    <h1>My First Attribute Directive</h1>
<h4>Pick a highlight color</h4>
<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
<p [myHighlight]="color">Highlight me!</p>
<p [myHighlight]="color" [defaultColor]="'violet'">
  Highlight me too!
</p>

  Uppercase Directive
  <br/>
  <input type="text" [(ngModel)]="name" uppercase />
  <br/> ngModel value : {{name}}
  
  <br/>
  <br/> Mask Directive:
  <br/>
  <input type="text" [(ngModel)]="phone" mask="(**) **** ****" />
  <br/> ngModel value: {{phone}}
  `,
  styles: [`
    :host {
      display: block;
      border: 1px solid black;
    }
  `],
  directives: [HighlightDirective, UppercaseDirective, MaskDirective]
})
export class MyHighlightComponent {
  public name: string;
  public phone: string;
  constructor() {
    this.name = "";
    this.phone = "";
  }

}
