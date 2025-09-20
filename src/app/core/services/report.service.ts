import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ReportService {
  constructor(private api: ApiService) {}

  getOrdersReport(params: any) {
    return this.api.get('orders', params);
  }

  getCancellationReport(params: any) {
    return this.api.get('cancellations', params);
  }

  getReturnsReport(params: any) {
    return this.api.get('returns', params);
  }
}
