import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadusuarioPageRoutingModule } from './cadusuario-routing.module';

import { CadusuarioPage } from './cadusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadusuarioPageRoutingModule
  ],
  declarations: [CadusuarioPage]
})
export class CadusuarioPageModule {}
