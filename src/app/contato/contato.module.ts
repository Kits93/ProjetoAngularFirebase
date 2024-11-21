import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoPageRoutingModule } from './contato-routing.module';

import { ContatoPage } from './contato.page';
import { MenuModule } from '../shared/components/menu/menu.module';
import { CabecalhoModule } from '../shared/components/cabecalho/cabecalho.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoPageRoutingModule,
    MenuModule,
    CabecalhoModule
  ],
  declarations: [ContatoPage]
})
export class ContatoPageModule {}
