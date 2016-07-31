import { provideRouter, RouterConfig } from '@angular/router';

import { AlbumComponent } from './albums/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact/contact.component';

import { heroesRoutes } from './heroes/heroes.routes';
import { HighlightComponent } from './attribute-directives/highlight.component';

export const routes: RouterConfig = [
    ...heroesRoutes,
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '**', component: AlbumsComponent },

  { path: 'att-directives', component: HighlightComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
