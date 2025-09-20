import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig,CustomAppConfig } from '../../app.config';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get(endpoint: string, params?: any) {
    return this.http.get(`${CustomAppConfig.apiBaseUrl}/${endpoint}`, { params });
  }

  post(endpoint: string, body: any) {
    return this.http.post(`${CustomAppConfig.apiBaseUrl}/${endpoint}`, body);
  }
}
