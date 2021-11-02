import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarshipDetailsPageRoutingModule } from './starship-details-routing.module';

import { StarshipDetailsPage } from './starship-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarshipDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StarshipDetailsPage]
})
export class StarshipDetailsPageModule {}
