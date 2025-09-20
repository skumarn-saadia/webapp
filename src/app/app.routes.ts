import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
   {
    path: 'Orders',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'orders',
    loadComponent: () => import('./features/orders/orders.component')
      .then(m => m.OrdersComponent)
  },
 
];
