import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticar',
    pathMatch: 'full'
  },
  {
    path: 'autenticar',
    loadChildren: () => import('./pages/autenticar/autenticar.module').then( m => m.AutenticarPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'meusdados/:id',
    loadChildren: () => import('./pages/meusdados/meusdados.module').then( m => m.MeusdadosPageModule)
  },
  {
    path: 'meusdados',
    loadChildren: () => import('./pages/meusdados/meusdados.module').then( m => m.MeusdadosPageModule)
  },
  {
    path: 'consucontas',
    loadChildren: () => import('./pages/consucontas/consucontas.module').then( m => m.ConsucontasPageModule)
  },
  {
    path: 'cadcontas',
    loadChildren: () => import('./pages/cadcontas/cadcontas.module').then( m => m.CadcontasPageModule)
  },
  {
    path: 'consutipos',
    loadChildren: () => import('./pages/consutipos/consutipos.module').then( m => m.ConsutiposPageModule)
  },
  {
    path: 'cadtipos',
    loadChildren: () => import('./pages/cadtipos/cadtipos.module').then( m => m.CadtiposPageModule)
  },
  {
    path: 'cadusuario',
    loadChildren: () => import('./pages/cadusuario/cadusuario.module').then( m => m.CadusuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
