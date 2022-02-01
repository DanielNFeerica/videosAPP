import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'homen-aranha',
    loadChildren: () => import('./filmes/homen-aranha/homen-aranha.module').then( m => m.HomenAranhaPageModule)
  },
  {
    path: 'chernobyl',
    loadChildren: () => import('./filmes/chernobyl/chernobyl.module').then( m => m.ChernobylPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
