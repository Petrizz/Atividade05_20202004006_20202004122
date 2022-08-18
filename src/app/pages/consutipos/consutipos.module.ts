import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsutiposPageRoutingModule } from './consutipos-routing.module';

import { ConsutiposPage } from './consutipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsutiposPageRoutingModule
  ],
  declarations: [ConsutiposPage]
})
export class ConsutiposPageModule {}
