import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IFilmesApi } from '../models/IFilmesApi';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmesApi;
  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.getData('filme');
    this.generos = this.dadosService.getData('generos');
    console.log('Filme Enviado', this.filme);
  }

}
