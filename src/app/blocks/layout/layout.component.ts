import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';

import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public readonly modal = inject(BsModalService);

  openContactUsModal() {
    this.modal.show(ContactUsComponent);
  }
}
