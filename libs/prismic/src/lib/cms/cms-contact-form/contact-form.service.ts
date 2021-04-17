import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  submit(form) {

    const location = this.router.url;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const options = {
      headers,
      responseType: 'text' as 'text'
    };

    const formBody = new URLSearchParams();

    Object.entries(form)
      .forEach(([key, value]) =>
        formBody.append(key, value as string));

    return this.httpClient.post(location, formBody.toString(), options)
      .pipe(retry(2));
  }
}
