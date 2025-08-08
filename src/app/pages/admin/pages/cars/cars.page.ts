import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { BsModalService } from 'ngx-bootstrap/modal';

import { AppService } from '../../../../app.service';

import { AdminCarsManagementModal } from './blocks/management.modal';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-admin-cars',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminCarsPage implements OnInit {
  public readonly modal = inject(BsModalService);

  public readonly appService = inject(AppService);

  public cars!: any;

  public API_URL = environment.API_URL;

  ngOnInit() {
    this.getCarsAll();
  }

  openModal(car?: any) {
    const modalRef = this.modal.show(AdminCarsManagementModal, {
      initialState: {
        car,
      },
    });

    modalRef.onHidden?.subscribe(() => {
      this.getCarsAll();
    });
  }

  getCarsAll() {
    this.appService.getCarsAll().subscribe((cars) => (this.cars = cars));
  }

  deleteCar(car: any) {
    if (confirm(`Удалить ${car.brand} ${car.model}?`)) {
      this.appService.deleteCar(car.id).subscribe(() => this.getCarsAll());
    }
  }

  restoreCar(car: any) {
    this.appService.restoreCar(car.id).subscribe(() => this.getCarsAll());
  }
}
