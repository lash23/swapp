import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    StarshipCardComponent,
    CharacterCardComponent,
    FilmCardComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    StarshipCardComponent,
    CharacterCardComponent,
    FilmCardComponent
  ]
})
export class ComponentsModule { }
