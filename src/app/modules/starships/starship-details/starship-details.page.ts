import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacters } from 'src/app/core/interfaces/ICharacter';
import { IFilms } from 'src/app/core/interfaces/IFilms';
import { IStarships } from 'src/app/core/interfaces/IStarships';
import { SwapiService } from 'src/app/core/services/swapi/swapi.service';
import { UnsplashService } from 'src/app/core/services/unsplash/unsplash.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.page.html',
  styleUrls: ['./starship-details.page.scss'],
})
export class StarshipDetailsPage implements OnInit {
  starshipId: number;
  starship: IStarships;
  pilots: ICharacters[] = [];
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
      this.starshipId = +params.get('id');
      this.getStarship();
    })
  }

  getStarship() {
    if (this.swapi.starships?.length > 0) {
      this.starship = this.swapi.starships
      .find(starship => starship.id == this.starshipId);

      const pilotsIds = [];
      const filmsIds = [];

      for (const pilotUrl of this.starship.pilots) {
        pilotsIds.push(this.swapi.setId(pilotUrl))
      }

      for (const filmUrl of this.starship.films) {
        filmsIds.push(this.swapi.setId(filmUrl))
      }

      this.pilots = this.swapi.people
      .filter(pilot => pilotsIds.includes(pilot.id) );

      this.films = this.swapi.films
      .filter(film => {
        return filmsIds.includes(film.id)
      })
      this.getImage();
    }
  }

  private handleRefresh() {
    this.utilsService.handleRefresh();
  }

  getImage() {
    this.featureImage = this.unsplash.starshipsImage;
  }
}
