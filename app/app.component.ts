import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';



import { AlbumComponent } from './album.component';
import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';


@Component({
    selector: 'my-app',
    templateUrl: `/app/app.component.html`,
    directives: [ROUTER_DIRECTIVES]
    // directives: [AlbumComponent, AlbumsComponent, ContactComponent]
})


export class AppComponent { }
