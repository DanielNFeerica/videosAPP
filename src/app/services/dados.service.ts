import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = [];

  constructor() { }

  setData(index: string, dados: any): boolean {
    if (index) {
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }

  }

  getData(index: string): any {
    if (index) {
      return this.dados[index];
    } else {
      return null;
    }
  }

  deleteData(index: string): boolean {
    return delete this.dados[index];
  }
}
