import { provideRouter, RouterConfig } from '@angular/router';

import { AlbumComponent } from './albums/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact/contact.component';
import { heroesRoutes } from './heroes/heroes.routes';

// import { HeroListComponent } from './heroes/hero-list.component';



const routes: RouterConfig = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'contact', component: ContactComponent },
  ...heroesRoutes,
  { path: '**', component: AlbumsComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
