import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
  template: `
    <app-header></app-header>
    <div class="main-container">
      <app-sidebar></app-sidebar>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = 'ecommerce-reports';
}
