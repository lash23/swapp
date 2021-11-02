import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  API_URL = environment.UNSPLASH_URL;
  ACCES_KEY = environment.UNSPLASH_ACCESS_KEY;
  SECRET_KEY = environment.UNSPLASH_SECRET_KEY;
  charactersImage: any;
  starshipsImage: any;
  filmsImage: any;
  constructor(
    private http: HttpClient
  ) { }

  getPhoto(type: 'film' | 'starship' | 'character', id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.SECRET_KEY
      })
    };
    return this.http.get(
      `${this.API_URL}/photos/${id}/?client_id=${this.ACCES_KEY}`,
      httpOptions
    ).subscribe((photo: any) => {
      if (type == 'film') { 
        this.filmsImage = photo.urls.small;
      }
      if (type == 'starship') {
        this.starshipsImage = photo.urls.small;
      }
      if (type == 'character') {
        this.charactersImage = photo.urls.small;
      }
    })
  }
}
