import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharactersPage } from './characters.page';

import { CharactersPageRoutingModule } from './characters-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CharactersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CharactersPage]
})
export class CharactersPageModule {}
