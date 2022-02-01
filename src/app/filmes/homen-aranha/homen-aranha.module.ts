import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomenAranhaPageRoutingModule } from './homen-aranha-routing.module';

import { HomenAranhaPage } from './homen-aranha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomenAranhaPageRoutingModule
  ],
  declarations: [HomenAranhaPage]
})
export class HomenAranhaPageModule {}
