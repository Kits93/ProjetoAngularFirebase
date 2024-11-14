import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonagensPageRoutingModule } from './personagens-routing.module';

import { PersonagensPage } from './personagens.page';
import { MenuModule } from '../shared/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonagensPageRoutingModule,
    MenuModule
  ],
  declarations: [PersonagensPage]
})
export class PersonagensPageModule {}
