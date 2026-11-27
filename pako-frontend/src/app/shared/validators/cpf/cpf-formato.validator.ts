import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfFormatoValidacao(
  control: AbstractControl): ValidationErrors|null{

  const padraoCPF = /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/;
  const cpf = String(control.value ?? '');

  if (!cpf){
    return null;
  }

  if (padraoCPF.test(cpf)) {
    return null;
  }

  return { cpfInvalido: true };
}