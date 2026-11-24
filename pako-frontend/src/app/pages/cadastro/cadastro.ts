import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  etapaAtual = 1

  proximaEtapa(){
    if (this.etapaAtual < 3){
      this.etapaAtual = this.etapaAtual + 1;
    }
  }

  voltarEtapa(){
    if (this.etapaAtual > 1){
      this.etapaAtual = this.etapaAtual -1;
    }
  }

  cadastroForm = new FormGroup({
    identificacao: new FormGroup({
      tipoPessoa: new FormControl('fisica'),
      nomeCompleto: new FormControl(''),
      cpf: new FormControl(''),
      nomeFantasia: new FormControl(''),
      cnpj: new FormControl(''),
      telefone: new FormControl(''),
      nomeComercial: new FormControl('')
    }),

    endereco: new FormGroup({
      cep: new FormControl(''),
      rua: new FormControl(''),
      numero: new FormControl('')
    }),

    acesso: new FormGroup({
      email: new FormControl(''),
      senha: new FormControl(''),
      confirmarSenha: new FormControl('')
    })
  });
  
}