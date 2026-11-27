import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cnpjFormatoValidacao(
  control: AbstractControl): ValidationErrors|null{

  const padraoCNPJ = /^([A-Z0-9]{12}\d{2}|[A-Z0-9]{2}\.[A-Z0-9]{3}\.[A-Z0-9]{3}\/[A-Z0-9]{4}-\d{2})$/;
  const cnpj = String(control.value ?? '');

  if (!cnpj){
    return null;
  }  

  if (padraoCNPJ.test(cnpj)) {
    return null;
  }

  return { cnpjInvalido: true };
}