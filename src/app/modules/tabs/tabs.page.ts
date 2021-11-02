import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, NavController } from '@ionic/angular';
import { SwapiService } from 'src/app/core/services/swapi/swapi.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  starships: any[] = [];
  films: any[] = [];
  @ViewChild('swTabs', {static: false}) swTabs: IonTabs;
  constructor(
    private swapi: SwapiService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.fetchAllData();
  }

  fetchAllData() {
    this.swapi.fetchAllData();
  }

  keepRoot() {
    if (this.router.url != '/tabs/starships') this.navCtrl.pop();
  }
}
