import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';

import { FormularioPage } from './formulario.page';
import { LibroService } from 'src/services/libro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule
  ],
  declarations: [FormularioPage],
  providers: [LibroService]
})
export class FormularioPageModule {}
