import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPage } from './films.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsPage,
  },
  {
    path: 'film-details/:id',
    loadChildren: () => import('./film-details/film-details.module').then( m => m.FilmDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsPageRoutingModule {}
