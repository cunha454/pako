import { AbstractControl, ValidationErrors } from "@angular/forms";

export function telefoneValidacao(control: AbstractControl): ValidationErrors|null{
  const telefone = String(control.value ?? '');
  const numeros = telefone.replace(/\D/g, "");

  if (!telefone){
    return null;
  }

  if (numeros.length === 11){
    return null;
  }

  return {numeroInvalido: true};
}