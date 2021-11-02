import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsPage } from './starships.page';

const routes: Routes = [
  {
    path: '',
    component: StarshipsPage,
  },
  {
    path: 'starship-details/:id',
    loadChildren: () => import('./starship-details/starship-details.module').then( m => m.StarshipDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsPageRoutingModule {}
