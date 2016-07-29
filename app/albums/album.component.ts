import {Component, OnInit, OnDestroy} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
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
export class AlbumComponent implements OnInit, OnDestroy {
    isLoading = true;
    photos: any;
    private sub: any;


    constructor(
        private _photoService: PhotoService,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this._activatedRoute.params.subscribe(params => {
            let id = +params['id'];

            this._photoService.getPhotos(id)
                .subscribe(photos => {
                    this.isLoading = false;
                    this.photos = photos;
                });
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }




}