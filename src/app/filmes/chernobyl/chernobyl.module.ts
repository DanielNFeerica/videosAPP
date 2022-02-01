import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChernobylPageRoutingModule } from './chernobyl-routing.module';

import { ChernobylPage } from './chernobyl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChernobylPageRoutingModule
  ],
  declarations: [ChernobylPage]
})
export class ChernobylPageModule {}
