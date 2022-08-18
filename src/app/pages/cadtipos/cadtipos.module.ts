import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadtiposPageRoutingModule } from './cadtipos-routing.module';

import { CadtiposPage } from './cadtipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadtiposPageRoutingModule
  ],
  declarations: [CadtiposPage]
})
export class CadtiposPageModule {}
