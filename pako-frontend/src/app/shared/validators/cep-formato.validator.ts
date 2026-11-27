import { AbstractControl, ValidationErrors } from "@angular/forms";

export function cepValidacaoFormato(control: AbstractControl): ValidationErrors|null{
  const cep = String(control.value ?? '');

  if (!cep){
    return null;
  }

  if (/^\d{5}-?\d{3}$/.test(cep)) {
    return null;
  }

  return {cepInvalido: true};
}