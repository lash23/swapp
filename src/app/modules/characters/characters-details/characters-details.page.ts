import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacters } from 'src/app/core/interfaces/ICharacter';
import { IFilms } from 'src/app/core/interfaces/IFilms';
import { IStarships } from 'src/app/core/interfaces/IStarships';
import { SwapiService } from 'src/app/core/services/swapi/swapi.service';
import { UnsplashService } from 'src/app/core/services/unsplash/unsplash.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.page.html',
  styleUrls: ['./characters-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {
  characterId: number;
  starships: IStarships[] = [];
  character: ICharacters;
  films: IFilms[] = [];
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
      this.characterId = +params.get('id');
      this.getCharacter();
    })
  }
  
  getCharacter() {
    if (this.swapi.people?.length > 0) {
      this.character = this.swapi.people
      .find(character => character.id == this.characterId);

    const filmsIds = [];
    const starshipsIds = [];

    for (const filmUrl of this.character.films) {
      filmsIds.push(this.swapi.setId(filmUrl))
    }

    for (const starshipUrl of this.character.starships) {
      starshipsIds.push(this.swapi.setId(starshipUrl))
    }

    this.films = this.swapi.films
      .filter(film => {
        return filmsIds.includes(film.id)
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
    this.featureImage = this.unsplash.charactersImage;
  }
}
