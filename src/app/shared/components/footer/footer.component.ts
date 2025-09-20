import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="main-footer">
      <p>&copy; 2024 E-commerce Reports. All rights reserved.</p>
    </footer>
  `,
  styleUrls: ['./footer.scss']
})
export class FooterComponent {}