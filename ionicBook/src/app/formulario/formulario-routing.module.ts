import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormularioPage } from './formulario.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPageRoutingModule {}
