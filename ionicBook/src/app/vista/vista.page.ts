import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Libro } from 'src/models/libro.model';
import { LibroService } from 'src/services/libro.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  libros: Libro[] = [];
  searchTerm: string = '';

  constructor(
    private libroService: LibroService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getLibros();
  }

  getLibros() {
    this.libroService.getLibros().subscribe(
      (libros) => {
        this.libros = libros;
      },
      (error) => {
        console.error('Error al obtener los libros:', error);
        // Manejar el error adecuadamente
      }
    );
  }

  filterLibros() {
    if (this.searchTerm.trim() === '') {
      this.getLibros();
    } else {
      this.libroService.getLibroById(+this.searchTerm).subscribe(
        (libro) => {
          this.libros = libro ? [libro] : [];
        },
        (error) => {
          console.error('Error al filtrar los libros:', error);
          // Manejar el error adecuadamente
        }
      );
    }
  }

  goToHomePage() {
    // Navegar a la página principal
    this.router.navigate(['/home']);
  }

}
