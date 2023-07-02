import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Libro } from 'src/models/libro.model';
import { LibroService } from 'src/services/libro.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  idLibro: number = 0;

  libro: Libro = {
    title: '',
    type: '',
    author: '',
    price: 0,
    photo: ''
  }

  constructor(
    private libroService: LibroService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addLibro() {
    this.libroService.addLibro(this.libro).subscribe(
      () => {
        console.log('Libro añadido exitosamente');
        // Realizar acciones adicionales si es necesario
      },
      (error) => {
        console.error('Error al añadir el libro:', error);
        // Manejar el error adecuadamente
      }
    );
  }

  updateLibro() {
    this.libroService.updateLibro(this.idLibro, this.libro).subscribe(
      () => {
        console.log('Libro actualizado exitosamente');
        // Realizar acciones adicionales si es necesario
      },
      (error) => {
        console.error('Error al actualizar el libro:', error);
        // Manejar el error adecuadamente
      }
    );
  }

  deleteLibro() {
    this.libroService.deleteLibro(this.idLibro).subscribe(
      () => {
        console.log('Libro borrado exitosamente');
        // Realizar acciones adicionales si es necesario
      },
      (error) => {
        console.error('Error al borrar el libro:', error);
        // Manejar el error adecuadamente
      }
    );
  }

  goToHomePage() {
    // Navegar a la página principal
    this.router.navigate(['/home']);
  }

}
