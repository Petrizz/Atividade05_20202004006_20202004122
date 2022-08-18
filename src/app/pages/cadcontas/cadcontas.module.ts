import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadcontasPageRoutingModule } from './cadcontas-routing.module';

import { CadcontasPage } from './cadcontas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadcontasPageRoutingModule
  ],
  declarations: [CadcontasPage]
})
export class CadcontasPageModule {}
