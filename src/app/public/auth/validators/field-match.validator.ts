import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fieldMatchValidator(...field: string[]): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const values: unknown[] = field.map((f) => form.get(f)?.value);
    const valid: boolean = values.every((v, i, arr) => v === arr[0]);
    return valid ? null : { fieldMatch: 'The password must be the same' };
  };
}
