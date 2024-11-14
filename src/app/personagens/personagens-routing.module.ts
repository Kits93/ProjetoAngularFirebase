import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonagensPage } from './personagens.page';

const routes: Routes = [
  {
    path: '',
    component: PersonagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonagensPageRoutingModule {}
