import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {
  sendEmail(payload) {
    console.info(payload);
    alert('hello world');
  }
}
