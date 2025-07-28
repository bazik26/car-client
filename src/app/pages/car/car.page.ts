import { CurrencyPipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';

import { switchMap } from 'rxjs';

import { AppService } from '../../app.service';

import { ContactUsComponent } from '../../blocks/contact-us/contact-us.component';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarPage implements OnInit {
  public readonly activatedRoute = inject(ActivatedRoute);

  public readonly modal = inject(BsModalService);

  public readonly appService = inject(AppService);

  public car!: any;

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ carId }) => this.appService.getCar(carId)))
      .subscribe((car) => (this.car = car));
  }

  openContactUsModal() {
    this.modal.show(ContactUsComponent);
  }
}
