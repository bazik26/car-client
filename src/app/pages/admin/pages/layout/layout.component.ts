import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AdminLayoutComponent {}
