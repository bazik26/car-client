import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { BsModalService } from 'ngx-bootstrap/modal';

import { AppService } from '../../app.service';
import { ManagementModal } from './blocks/management.modal';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPage implements OnInit {
  public readonly appService = inject(AppService);

  public readonly modal = inject(BsModalService);

  public cars!: any;

  ngOnInit() {
    this.getAllCars();
  }

  openModal(car?: any) {
    const modalRef = this.modal.show(ManagementModal, {
      initialState: {
        car,
      },
    });

    modalRef.onHidden?.subscribe(() => {
      this.getAllCars();
    });
  }

  getAllCars() {
    this.appService.getCarsAll().subscribe((cars) => (this.cars = cars));
  }

  deleteCar(car: any) {
    if (confirm(`Удалить ${car.brand} ${car.model}?`)) {
      this.appService.deleteCar(car.id).subscribe(() => this.getAllCars());
    }
  }

  restoreCar(car: any) {
    this.appService.restoreCar(car.id).subscribe(() => this.getAllCars());
  }
}
