import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = 'http://localhost:3000/books'; // Reemplaza con la URL de tu API REST

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  getLibroById(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}?id_book=${id}`);
  }

  addLibro(libro: Libro): Observable<any> {
    return this.http.post(this.apiUrl, libro);
  }

  updateLibro(id: number, libro: Libro): Observable<any> {
    return this.http.put(`${this.apiUrl}?id_book=${id}`, libro);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id_book=${id}`);
  }
}
