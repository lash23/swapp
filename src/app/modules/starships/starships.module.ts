import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarshipsPage } from './starships.page';

import { StarshipsPageRoutingModule } from './starships-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StarshipsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StarshipsPage]
})
export class StarshipsPageModule {}
