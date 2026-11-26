import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CampoDeSenha } from '../../shared/components/campo-de-senha/campo-de-senha';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, CampoDeSenha],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    identificador: new FormControl('', [Validators.required, validarIdentificador]),
    senha: new FormControl('', Validators.required)
  });

  onSubmit(){
    if (this.loginForm.valid){
      console.log("Sucesso")
      this.mostrarAviso = true
    } else {
      console.log("Falha, existem campos inválidos")
      this.loginForm.markAllAsTouched()
    }
  }

  mostrarAviso = false
}

function validarIdentificador(control: AbstractControl): ValidationErrors | null{
  const valor = String(control.value ?? '')

  if (valor.includes('@')){
    if (Validators.email(control) === null){
      return null;
    } else {
      return {identificadorInvalido: true};
    }
  }

    const padraoCPF = /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/;
    const padraoCNPJ = /^(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/;

    if (padraoCPF.test(valor) || padraoCNPJ.test(valor)){
      return null;
    } else {
      return { identificadorInvalido: true };
    }

}
