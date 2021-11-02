import { Component } from '@angular/core';
import { IFilms } from 'src/app/core/interfaces/IFilms';
import { SwapiService } from 'src/app/core/services/swapi/swapi.service';

@Component({
  selector: 'app-films',
  templateUrl: 'films.page.html',
  styleUrls: ['films.page.scss']
})
export class FilmsPage {
  films: IFilms[] = [];
  constructor(
    private swapi: SwapiService
  ) {
  }

  ionViewWillEnter() {
    this.getAllFilms();
  }

  getAllFilms() {
    this.films = this.swapi.films;
  }
}
