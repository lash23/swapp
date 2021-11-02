import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { forkJoin, Observable, Subject } from 'rxjs';
import { IFilms } from '../../interfaces/IFilms';
import { ICharacters } from '../../interfaces/ICharacter';
import { IStarships } from '../../interfaces/IStarships';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { UtilsService } from '../utils/utils.service';
import { UnsplashService } from '../unsplash/unsplash.service';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  API_URL = environment.API_URL;
  starships: IStarships[];
  people: ICharacters[];
  films: IFilms[];

  allStarships: Subject<any> = new Subject();
  allPeople: Subject<any> = new Subject();
  allFilms: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
    private unsplashService: UnsplashService
  ) { }

  private getFirstPage(type: string) {
    return this.http.get(`${this.API_URL}/${type}/`);
  }

  private fetchData(type: string) {
    return this.getFirstPage(type).subscribe((firstPage: IApiResponse) => {
      const pages = Math.ceil(firstPage.count / 10);

      if (pages == 1) {
        firstPage.results.forEach((element: any) => {
          element.id = this.setId(element.url);
        });
        this.handleResponse(type, firstPage)
      } else {
        const forkRequest = [];

        for (let i = 2; i <= pages; i++) {
          forkRequest.push(
            this.http.get(`${this.API_URL}/${type}/?page=${i}`)
          );
        };
  
        return forkJoin(forkRequest).subscribe((forkResponses: any) => {
          const finalPages = [];
          for (const response of forkResponses) {
            finalPages.push(...response.results)
          }
  
          const data: IApiResponse = {
            count: firstPage.count,
            results: [
              ...firstPage.results,
              ...finalPages
            ],
            pages
          }
          data.results.forEach((element: any) => {
            element.id = this.setId(element.url);
          });
          this.handleResponse(type, data)
        })
      }
    })
  }

  fetchAllData() {
    this.fetchImages();
    this.fetchData('starships')
    this.fetchData('films')
    this.fetchData('people')
  }

  private handleResponse(type: string, data: IApiResponse) {
    if (type === 'starships') {
      this.allStarships.next(data.results)
      this.starships = data.results;
    }

    if (type === 'films') {
      this.allFilms.next(data.results)
      this.films = data.results;
    }

    if (type === 'people') {
      this.allPeople.next(data.results)
      this.people = data.results;
    }
  }

  setId(url: string) {
    return +url.match(/\d+/)[0];
  }

  fetchImages() {
    this.unsplashService.getPhoto('starship', 'pbO12i4mzZQ');
    this.unsplashService.getPhoto('film', 'i5Lmb7qPR7s');
    this.unsplashService.getPhoto('character', '05804iCnNcQ');
  }
}
