import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsutiposPage } from './consutipos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsutiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsutiposPageRoutingModule {}
