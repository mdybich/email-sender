import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {
  private readonly BASE_API_URL = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}
  sendEmail(payload) {
    return this.http.post(`${this.BASE_API_URL}/mail`, payload);
  }
}
