import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmesA } from '../models/IFilmesApi';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  language = 'pt-PT';
  region = 'PT';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=5f8db31fd88f73903755494cece3c3cb';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  getFilmes(busca: string): Observable<IListaFilmesA> {
    const url = `${this.apiURL}search/movie${this.key}&language=${this.language}&region=${this.region}&query=${busca}`;

    return this.http.get<IListaFilmesA>(url).pipe(
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
