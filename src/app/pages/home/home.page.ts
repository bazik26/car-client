import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { AppService } from '../../app.service';

import { CarItemComponent } from '../../blocks/car-item/car-item.component';
import { ContactUsComponent } from '../../blocks/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarItemComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  public readonly modal = inject(BsModalService);

  public readonly appService = inject(AppService);

  public cars!: any[];

  public ngOnInit() {
    this.appService.getCars().subscribe((cars) => (this.cars = cars));
  }

  openContactUsModal() {
    this.modal.show(ContactUsComponent);
  }
}
