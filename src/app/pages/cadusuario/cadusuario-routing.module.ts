import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadusuarioPage } from './cadusuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadusuarioPageRoutingModule {}
