import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsucontasPageRoutingModule } from './consucontas-routing.module';

import { ConsucontasPage } from './consucontas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsucontasPageRoutingModule
  ],
  declarations: [ConsucontasPage]
})
export class ConsucontasPageModule {}
