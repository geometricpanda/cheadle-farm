import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailOrTelValidator } from './email-or-tel.validator';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UkPhoneValidator } from './uk-phone.validator';
import { ContactFormService } from './contact-form.service';
import { ContactFormSliceInterface } from '../../store';

enum ERROR_MESSAGE {
  NAME_REQUIRED = 'It looks like you may have forgotten to tell us your name.',
  NAME_MIN_LENGTH = 'It looks like there\'s something wrong with your name.',
  EMAIL_INVALID = 'That doesnt seem to be a valid email address.',
  TEL_INVALID = 'That doesnt seem to be a valid UK phone number.',
  MESSAGE_REQUIRED = 'It looks like you may have forgotten to leave a message.',
  MESSAGE_MIN_LENGTH = 'It looks like you may have forgotten to complete your message.',
  FORM_EMAIL_OR_TEL = 'We need either your email or your phone number so that we can respond to your query.',
}

@Component({
  selector: 'app-cms-contact-form',
  templateUrl: './cms-contact-form.component.html',
  styleUrls: ['./cms-contact-form.component.css'],
})
export class CmsContactFormComponent implements OnInit, OnDestroy {

  @Input() slice: ContactFormSliceInterface;

  @ViewChild('oopsValidator') oopsValidator: ElementRef<HTMLDivElement>;
  @ViewChild('oopsError') oopsError: ElementRef<HTMLDivElement>;
  @ViewChild('successEl') successEl: ElementRef<HTMLDivElement>;

  errors = [];

  formName = 'contact';
  submitted = false;
  submissionSuccess = false;
  submissionError = false;
  formEvents: Subscription;

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get tel(): AbstractControl {
    return this.form.get('tel');
  }

  get message(): AbstractControl {
    return this.form.get('message');
  }

  get botfield(): AbstractControl {
    return this.form.get('botField');
  }

  get submit(): AbstractControl {
    return this.form.get('submit');
  }

  form = new FormGroup(
    {
      botField: new FormControl(''),
      formName: new FormControl(this.formName),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      tel: new FormControl('', [UkPhoneValidator]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      submit: new FormControl('Submit'),
    },
    {
      validators: [EmailOrTelValidator],
      updateOn: 'change',
    },
  );

  constructor(private formService: ContactFormService) {
  }


  ngOnInit() {
    this.formEvents = this.form
      .valueChanges
      .subscribe(() => this.errors = this.calculateErrors());
  }

  ngOnDestroy() {
    this.formEvents.unsubscribe();
  }

  calculateErrors() {
    return [
      this.getNameError(),
      this.getEmailError(),
      this.getTelErrors(),
      this.getMessageError(),
      this.getFormError(),
    ].filter(item => !!item);
  }

  getNameError() {
    if (!this.name.errors) {
      return;
    }
    if (this.name.errors.required) {
      return ERROR_MESSAGE.NAME_REQUIRED;
    }
    if (this.name.errors.minlength) {
      return ERROR_MESSAGE.NAME_MIN_LENGTH;
    }
  }

  getEmailError() {
    if (!this.email.errors) {
      return;
    }
    if (this.email.errors.email) {
      return ERROR_MESSAGE.EMAIL_INVALID;
    }
  }

  getTelErrors() {
    if (!this.tel.errors) {
      return;
    }
    if (this.tel.errors.ukPhoneNumber) {
      return ERROR_MESSAGE.TEL_INVALID;
    }
  }

  getMessageError() {
    if (!this.message.errors) {
      return;
    }
    if (this.message.errors.required) {
      return ERROR_MESSAGE.MESSAGE_REQUIRED;
    }
    if (this.message.errors.minlength) {
      return ERROR_MESSAGE.MESSAGE_MIN_LENGTH;
    }
  }

  getFormError() {
    if (!this.form.errors) {
      return;
    }
    if (this.form.errors.emailOrTel) {
      return ERROR_MESSAGE.FORM_EMAIL_OR_TEL;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.errors = this.calculateErrors();

    setTimeout(() => this.oopsValidator.nativeElement.focus(), 100);

    if (this.form.valid) {
      this.hideError();
      this.submit.disable();
      this.postForm();
    }
  }

  postForm() {
    const form = {
      Name: this.name.value,
      Email: this.email.value,
      Phone: this.tel.value,
      Message: this.message.value,
      'form-name': this.formName,
      'bot-field': this.botfield.value,
    };

    this.formService.submit(form)
      .pipe(tap(() => this.submit.enable()))
      .subscribe(
        () => this.showSuccess(),
        (err) => this.showError(err));
  }

  hideError() {
    this.submissionError = false;
  }

  showSuccess() {
    this.submissionSuccess = true;
    this.hideError();
    setTimeout(() => this.successEl.nativeElement.focus(), 100);
  }

  showError(err) {
    this.submissionError = true;
    setTimeout(() => this.oopsError.nativeElement.focus(), 100);
  }
}
