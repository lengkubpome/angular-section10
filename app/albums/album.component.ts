import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
// import { RouteParams } from '@angular/router';
import {PhotoService} from './photo.service';

@Component({
    template: `
        <h1>Album</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
	       <div>
            <img *ngFor="let photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
   `,
    providers: [PhotoService, HTTP_PROVIDERS]
})
export class AlbumComponent implements OnInit {
    isLoading = true;
    photos : any;

    constructor(private _photoService: PhotoService){
    }
    
    ngOnInit(){
        this._photoService.getPhotos(1)
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }
}