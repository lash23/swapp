import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmsPage } from './films.page';

import { FilmsPageRoutingModule } from './films-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FilmsPage }]),
    FilmsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FilmsPage]
})
export class FilmsPageModule {}
