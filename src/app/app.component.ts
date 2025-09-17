import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  public ngOnInit() {
    if (location.href.search('admin') === -1) {
      document.body.classList.add('client');
    }
    
    // Инициализируем тему при загрузке приложения
    this.themeService.theme$.subscribe();
  }
}
