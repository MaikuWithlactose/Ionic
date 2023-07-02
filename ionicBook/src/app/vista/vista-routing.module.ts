import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { VistaPage } from './vista.page';

const routes: Routes = [
  {
    path: '',
    component: VistaPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaPageRoutingModule {}
