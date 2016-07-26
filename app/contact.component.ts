import {Component} from '@angular/core';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent {
    onSubmit(form){
        console.log(form);
    }
}