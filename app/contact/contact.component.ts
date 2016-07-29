import {Component} from '@angular/core';

@Component({
    templateUrl: '/app/contact/contact.component.html'
})
export class ContactComponent {
    onSubmit(form: any) {
        console.log(form);
    }
}