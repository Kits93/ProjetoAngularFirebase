import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetasPage } from './planetas.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetasPageRoutingModule {}
