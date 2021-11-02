import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacters } from 'src/app/core/interfaces/ICharacter';
import { IFilms } from 'src/app/core/interfaces/IFilms';
import { IStarships } from 'src/app/core/interfaces/IStarships';
import { SwapiService } from 'src/app/core/services/swapi/swapi.service';
import { UnsplashService } from 'src/app/core/services/unsplash/unsplash.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  filmId: number;
  starships: IStarships[] = [];
  characters: ICharacters[];
  film: IFilms;
  featureImage: string;
  constructor(
    private route: ActivatedRoute,
    private swapi: SwapiService,
    private utilsService: UtilsService,
    private unsplash: UnsplashService
  ) {
    this.handleRefresh();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.filmId = +params.get('id');
    this.getFilm();
    })
  }

  getFilm() {
    if (this.swapi.films?.length > 0) {
      this.film = this.swapi.films
      .find(film => film.id == this.filmId);

    const charactersIds = [];
    const starshipsIds = [];

    for (const starshipUrl of this.film.starships) {
      starshipsIds.push(this.swapi.setId(starshipUrl))
    }

    for (const characterUrl of this.film.characters) {
      charactersIds.push(this.swapi.setId(characterUrl))
    }

    this.characters = this.swapi.people
      .filter(character => {
        return charactersIds.includes(character.id)
      })

    this.starships = this.swapi.starships
      .filter(starship => {
        return starshipsIds.includes(starship.id)
      })
    this.getImage();
    }
  }

  private handleRefresh() {
    this.utilsService.handleRefresh();
  }

  getImage() {
    this.featureImage = this.unsplash.filmsImage;
  }
}
