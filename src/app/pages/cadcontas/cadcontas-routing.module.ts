import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadcontasPage } from './cadcontas.page';

const routes: Routes = [
  {
    path: '',
    component: CadcontasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadcontasPageRoutingModule {}
