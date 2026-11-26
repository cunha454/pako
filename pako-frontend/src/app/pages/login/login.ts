import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  onSubmit(){
    if (this.loginForm.valid){
      console.log("Sucesso")
      this.mostrarAviso = true
    } else {
      console.log("Falha")
      this.loginForm.markAllAsTouched()
    }
  }

  mostrarAviso = false
}
