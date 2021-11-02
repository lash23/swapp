import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersDetailsPageRoutingModule } from './characters-details-routing.module';

import { CharactersDetailsPage } from './characters-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CharactersDetailsPage]
})
export class CharactersDetailsPageModule {}
