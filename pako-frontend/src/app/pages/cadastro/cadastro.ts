import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CampoDeSenha } from '../../shared/components/campo-de-senha/campo-de-senha';
import { senhaValidacao } from '../../shared/validators/senha.validator';
import { telefoneValidacao } from '../../shared/validators/telefone.validator';
import { cnpjFormatoValidacao } from '../../shared/validators/cnpj/cnpj-formato.validator';
import { cpfFormatoValidacao } from '../../shared/validators/cpf/cpf-formato.validator';
import { cepValidacaoFormato } from '../../shared/validators/cep-formato.validator';
import { CepService, Endereco } from '../../core/services/cep.service';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule, CampoDeSenha],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  etapaAtual = 1;

  proximaEtapa(){ 
    const etapas = [
      this.cadastroForm.controls.identificacao,
      this.cadastroForm.controls.endereco,
      this.cadastroForm.controls.acesso
    ];

    const etapaAtual = etapas[this.etapaAtual-1];

    /*etapaAtual.markAllAsTouched();

    if (etapaAtual.invalid){
      return;
    }*/ 

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
      nomeComercial: new FormControl(''),

      nomeFantasia: new FormControl(''),
      cnpj: new FormControl(''),

      telefone: new FormControl('', [Validators.required, telefoneValidacao])
    }),

    endereco: new FormGroup({
      cep: new FormControl('', [Validators.required, cepValidacaoFormato]),
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      complemento: new FormControl('')
    }),

    acesso: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, senhaValidacao]),
      confirmarSenha: new FormControl('', Validators.required)
    }, {
      validators: verificarCompatibilidadeSenha
    }
  ) 
  });
  
  ngOnInit(){
    const identificacao = this.cadastroForm.controls.identificacao;
    const tipoPessoa = identificacao.controls.tipoPessoa;

    tipoPessoa.valueChanges.pipe(
      startWith(tipoPessoa.value)
    ).subscribe(tipo => {
      
      const nomeCompleto = identificacao.controls.nomeCompleto;
      const nomeComercial = identificacao.controls.nomeComercial;
      const cpf = identificacao.controls.cpf;
      const nomeFantasia = identificacao.controls.nomeFantasia;
      const cnpj = identificacao.controls.cnpj;
      const telefone = identificacao.controls.telefone;
      if (tipo === "fisica"){
        cpf.setValidators([Validators.required, cpfFormatoValidacao])
        nomeCompleto.setValidators(Validators.required)
        cnpj.clearValidators();
        nomeFantasia.clearValidators();
        cnpj.reset('');
        nomeFantasia.reset('');
        telefone.reset('');
      }
      if (tipo === "juridica"){
        cnpj.setValidators([Validators.required, cnpjFormatoValidacao]);
        nomeFantasia.setValidators(Validators.required);
        
        cpf.clearValidators();
        nomeCompleto.clearValidators();
        cpf.reset('');
        nomeCompleto.reset('');
        nomeComercial.reset('');
        telefone.reset('');
      }
    });
  }

  cep = this.cadastroForm.controls.endereco.controls.cep
  private cepService = inject(CepService);
  endereco: Endereco | null = null;

  obterDadosCEP(){
    let cepValor = this.cadastroForm.controls.endereco.controls.cep.value ?? '';
    let numeros = cepValor.replace(/\D/g, "");
    const formEndereco = this.cadastroForm.controls.endereco;

    this.cepService.buscarEndereco(numeros).subscribe({
      next: (dados) => {
        if (dados.erro) {
          this.endereco = null;
          console.log("CEP não encontrado");
          return;
        }

        formEndereco.patchValue({
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          uf: dados.uf
        });

      },

      error: (erro) => {
        this.endereco = null;
        console.log("Erro ao buscar CEP", erro)
      }
    })
  }
}

function verificarCompatibilidadeSenha(control: AbstractControl): ValidationErrors|null{
  const senha = control.get('senha')?.value;
  const confirmarSenha = control.get('confirmarSenha')?.value;

  if (senha !== confirmarSenha){
    return { senhaNaoCompativel: true };
  }

  return null
}





