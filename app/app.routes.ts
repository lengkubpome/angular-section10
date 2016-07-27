import { provideRouter, RouterConfig } from '@angular/router';

import { AlbumComponent } from './album.component';
import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';



const routes: RouterConfig = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: AlbumsComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
