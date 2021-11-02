import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { SwapiService } from 'src/app/core/services/swapi/swapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: 'characters.page.html',
  styleUrls: ['characters.page.scss']
})
export class CharactersPage implements ViewWillEnter {
  characters: any[] = [];
  constructor(
    private swapi: SwapiService
  ) {
  }

  ionViewWillEnter() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characters = this.swapi.people;
  }
}
