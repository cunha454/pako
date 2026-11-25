import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-campo-de-senha',
  imports: [ReactiveFormsModule],
  templateUrl: './campo-de-senha.html',
  styleUrl: './campo-de-senha.css',
})
export class CampoDeSenha{
  @Input({ required: true }) controle!: FormControl;

  senhaVisivel = false

  alterarSenha(){
    this.senhaVisivel = !this.senhaVisivel
  }
}
