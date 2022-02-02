import { GeneroService } from './../services/genero.service';
import { IListaFilmesA, IFilmesApi } from './../models/IFilmesApi';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilmes } from '../models/IFilmes';
import { Router } from '@angular/router';
import { IGenero } from '../models/IGenero';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulos = 'Filmes';
  listaVideos: IFilmes[] = [
    {
      nome: 'Homem-Aranha',
      lancamento: '17-12-2021 (US)',
      duracao: '2h 28m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/homen-aranha'
    },
    {
      nome: 'Chernobyl: Abyss (2021)',
      lancamento: '15-04-2021 (RU)',
      duracao: '2h 16m',
      classificacao: 63,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bnB2EkaY6HEdzwVkkH7dBHy6HmZ.jpg',
      generos: ['Drama', 'História', 'Aventura'],
      pagina: '/chernobyl'
    },
  ];
  listaFilmes: IListaFilmesA;

  generos: string[]= [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }


  getFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.getFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }

  }

  exibirFilme(filme: IFilmesApi) {
    this.dadosService.setData('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja colocar o filme como favorito?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          id: 'confirm-button',
          handler: () => {
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Filme Adicionado aos favoritos',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  ngOnInit() {
    this.generoService.buscarGeneros().subscribe(dados => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.setData('generos', this.generos);
    });
  }

}
