import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const pattern = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

export const UkPhoneValidator: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    const isValid = pattern.test(control.value);

    return (isValid || control.value === '')
      ? null
      : {ukPhoneNumber: false};
  };



