import { AbstractControl, ValidationErrors } from '@angular/forms';

export function senhaValidacao(control: AbstractControl): ValidationErrors|null{
  const senha = String(control.value ?? '');

  const erros: ValidationErrors = {};

  if (senha.length < 8){
    erros['minimoCaracteres'] = true;
  }

  if (!/[A-Z]/.test(senha)){
    erros['letraMaiuscula'] = true;
  }
  
  if (!/[a-z]/.test(senha)){
    erros['letraMinuscula'] = true;
  }

  if (!/[0-9]/.test(senha)){
    erros['numero'] = true;
  }

  if (!/[^A-Za-z0-9]/.test(senha)){
    erros['simbolos'] = true;
  }

  return Object.keys(erros).length > 0 ? erros: null;
}
