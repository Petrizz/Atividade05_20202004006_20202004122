import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsucontasPage } from './consucontas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsucontasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsucontasPageRoutingModule {}
