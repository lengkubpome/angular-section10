import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'att-directive',
   template: `
    <h1>My First Attribute Directive</h1>
    <h4>Pick a highlight color</h4>

  `,
//    directives: [HighlightDirective]
})
export class HighlightComponent { }
