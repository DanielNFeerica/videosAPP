import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilmes } from '../models/IFilmes';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulos = 'Videos App';
  listaVideos: IFilmes[] = [
    {
      nome: 'Homem-Aranha',
      lancamento: '17-12-2021 (US)',
      duracao: '2h 28m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica']
    },
    {
      nome: 'Chernobyl: Abyss (2021)',
      lancamento: '15-04-2021 (RU)',
      duracao: '2h 16m',
      classificacao: 63,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bnB2EkaY6HEdzwVkkH7dBHy6HmZ.jpg',
      generos: ['Drama', 'História', 'Aventura']
    },
    {
      nome: 'Hotel Transylvania 4 (2022)',
      lancamento: '13-01-2022 (US',
      duracao: '1h 28m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9PbtCo5IIkd26WPQfZUpPyn6fTz.jpg',
      generos: ['Animação', 'Família', 'Fantasia', 'Comédia', 'Aventura']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) { }

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

}
