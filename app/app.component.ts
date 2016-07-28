import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';



import { AlbumComponent } from './albums/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact/contact.component';


@Component({
    selector: 'my-app',
    templateUrl: `/app/app.component.html`,
    directives: [ROUTER_DIRECTIVES]
    // directives: [AlbumComponent, AlbumsComponent, ContactComponent]
})


export class AppComponent { }
