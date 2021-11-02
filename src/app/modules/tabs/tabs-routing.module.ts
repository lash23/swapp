import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartAtHomeGuard } from 'src/app/core/guards/start-at-home.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [StartAtHomeGuard],
    children: [
      {
        path: 'starships',
        loadChildren: () => import('../starships/starships.module').then(m => m.StarshipsPageModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersPageModule)
      },
      {
        path: 'films',
        loadChildren: () => import('../films/films.module').then(m => m.FilmsPageModule)
      },
      {
        path: '**',
        redirectTo: '/tabs/starships',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/starships',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
