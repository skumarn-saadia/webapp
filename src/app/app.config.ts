import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

interface CustomConfig {
  apiBaseUrl: string;
  defaultPageSize: number;
}

// Your custom configuration
export const CustomAppConfig: CustomConfig = {
  apiBaseUrl: 'http://localhost:8000/',
  defaultPageSize: 25
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
