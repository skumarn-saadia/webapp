import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="main-header">
      <div class="logo">E-commerce Reports</div>
      <nav class="main-nav">
        <!-- Add your navigation items here -->
      </nav>
    </header>
  `,
  styleUrls: ['./header.scss']
})
export class HeaderComponent {}