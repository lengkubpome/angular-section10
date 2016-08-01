import { provideRouter, RouterConfig } from '@angular/router';

import { AlbumComponent } from './albums/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact/contact.component';

import { heroesRoutes } from './heroes/heroes.routes';
 import { MyHighlightComponent } from './attribute-directives/highlight.component';

export const routes: RouterConfig = [
    ...heroesRoutes,
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'contact', component: ContactComponent },

    { path: 'myHighlight', component: MyHighlightComponent },

  { path: '**', component: AlbumsComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
