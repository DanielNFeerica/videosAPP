import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChernobylPage } from './chernobyl.page';

const routes: Routes = [
  {
    path: '',
    component: ChernobylPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChernobylPageRoutingModule {}
