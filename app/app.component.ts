import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './heroes/hero.service';



// import { AlbumComponent } from './albums/album.component';
// import { AlbumsComponent } from './albums/albums.component';
// import { ContactComponent } from './contact/contact.component';


@Component({
    selector: 'my-app',
    templateUrl: `/app/app.component.html`,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})


export class AppComponent { }
