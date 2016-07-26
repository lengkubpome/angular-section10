import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { RouteConfig } from '@angular/router-deprecated';

import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault:true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other',redirectTo:['Albums'] }
])

@Component({
    selector: 'my-app',
    templateUrl: `/app/app.component.html`,
    directives: [RouterOutlet]
})
export class AppComponent { }
