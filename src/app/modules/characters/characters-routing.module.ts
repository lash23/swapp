import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPage } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage,
  },
  {
    path: 'character-details/:id',
    loadChildren: () => import('./characters-details/characters-details.module').then( m => m.CharactersDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule {}
