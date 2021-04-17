import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const EmailOrTelValidator: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    const tel = control.get('tel').value;
    const email = control.get('email').value;

    return (tel || email)
      ? null
      : {emailOrTel: true};
  };
