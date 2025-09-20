import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="main-sidebar">
      <nav class="sidebar-nav">
        <ul>
          <li><a routerLink="/dashboard">Dashboard</a></li>
          <li><a routerLink="/orders">Orders</a></li>
        </ul>
      </nav>
    </aside>
  `,
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {}