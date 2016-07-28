import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {PhotoService} from './photo.service';

@Component({
    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
            <li *ngFor="let album of albums">
           
              {{ album.title }}
            </li> 
        </ul>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [PhotoService, HTTP_PROVIDERS]
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums: any;

    constructor(private _photoService: PhotoService) {
    }

    ngOnInit() {
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}