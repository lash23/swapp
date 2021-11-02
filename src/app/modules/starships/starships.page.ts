import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { IApiResponse } from 'src/app/core/interfaces/IApiResponse';
import { IStarships } from 'src/app/core/interfaces/IStarships';
import { SwapiService } from 'src/app/core/services/swapi/swapi.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-starships',
  templateUrl: 'starships.page.html',
  styleUrls: ['starships.page.scss']
})
export class StarshipsPage implements OnInit {
  starships: IStarships[] = [];
  constructor(
    private swapi: SwapiService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.getAllStarship(true);
  }

  ionViewWillEnter(): void {
    this.getAllStarship();
  }

  getAllStarship(fetch?: boolean) {
    if (fetch) {
      this.utilsService.showLoading();
      this.swapi.allStarships.subscribe((starships: IStarships[]) => {
        this.starships = starships;
        this.utilsService.dismissLoading()
      }, err => {
        console.log(err);
        this.utilsService.dismissLoading()
      });
    } else {
      this.starships = this.swapi.starships;
    }
  }
}
