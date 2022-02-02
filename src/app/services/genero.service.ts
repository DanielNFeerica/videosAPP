import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  language = 'pt-PT';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=5f8db31fd88f73903755494cece3c3cb';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero> {
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.language}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(error => this.viewError(error))

    );
  }

  async viewError(error) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
