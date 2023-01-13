import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl<string, string>): ValidationErrors | null {
  const validation: ValidationErrors = { };
  if (control.value.length < 8) {
    validation['passwordLenght'] = 'Password must be at least 8 characters long';
  }
  return Object.keys(validation).length === 0 ? null : validation;
}
