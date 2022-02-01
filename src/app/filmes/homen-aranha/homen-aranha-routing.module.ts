import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomenAranhaPage } from './homen-aranha.page';

const routes: Routes = [
  {
    path: '',
    component: HomenAranhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomenAranhaPageRoutingModule {}
