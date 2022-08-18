import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadtiposPage } from './cadtipos.page';

const routes: Routes = [
  {
    path: '',
    component: CadtiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadtiposPageRoutingModule {}
