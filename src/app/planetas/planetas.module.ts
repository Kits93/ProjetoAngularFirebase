import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetasPageRoutingModule } from './planetas-routing.module';

import { PlanetasPage } from './planetas.page';
import { MenuModule } from '../shared/components/menu/menu.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetasPageRoutingModule,
    MenuModule,
    FooterModule
  ],
  declarations: [PlanetasPage]
})
export class PlanetasPageModule {}
