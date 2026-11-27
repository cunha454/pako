import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

@Injectable({
  providedIn: 'root',
})
export class CepService {

  private http = inject(HttpClient);

  buscarEndereco(cep: string) {
    return this.http.get<Endereco>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
  }
}