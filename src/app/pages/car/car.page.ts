import {CurrencyPipe, JsonPipe} from '@angular/common';
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

  private readonly singleFeatureFields = [
    'conditionerType',
    'windowLifter',
    'interiorMaterials',
    'interiorColor',
    'powerSteering',
    'steeringWheelAdjustment',
    'spareWheel',
    'headlights',
    'seatAdjustment',
    'memorySeatModule',
    'seatHeated',
    'seatVentilation',
  ];


  public car!: any;

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ carId }) => this.appService.getCar(carId)))
      .subscribe((car) => (this.car = car));
  }

  openContactUsModal() {
    this.modal.show(ContactUsComponent);
  }

  get features(): string[] {
    const car: any = this.car;
    if (!car) return [];

    const singles = this.singleFeatureFields
      .map((k) => car[k])
      .flatMap((v) => (Array.isArray(v) ? v : v ? [v] : []))
      .filter(Boolean) as string[];

    const grouped: string[] = [];
    for (let i = 1; i <= 9; i++) {
      const arr = car[`group${i}`];
      if (Array.isArray(arr)) grouped.push(...arr);
    }

    return Array.from(new Set([...singles, ...grouped]));
  }
}
