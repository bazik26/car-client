import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPage implements OnInit {
  public readonly fb = inject(FormBuilder);

  public readonly appService = inject(AppService);

  public form!: FormGroup;

  public BRANDS_AND_MODELS!: any[];

  ngOnInit() {
    this.form = this.fb.group({
      brand: [null, [Validators.required]],
      model: [null, [Validators.required]],
      year: [null, [Validators.required]],
      mileage: [null, [Validators.required]],
      vin: [null],
      gearbox: [null, [Validators.required]],
      fuel: [null, [Validators.required]],
      powerValue: [null, [Validators.required]],
      powerType: [null, [Validators.required]],
      engine: [null, [Validators.required]],
      drive: [null, [Validators.required]],
      price: [null, [Validators.required]],
      images: this.fb.array([this.fb.control(null, Validators.required)]),
    });

    this.appService
      .getAllBrandsAndModels()
      .subscribe(
        (BRANDS_AND_MODELS) => (this.BRANDS_AND_MODELS = BRANDS_AND_MODELS)
      );
  }

  get brands() {
    return this.BRANDS_AND_MODELS;
  }

  get models() {
    const brand = this.form.get('brand')?.value;

    if (brand) {
      return this.BRANDS_AND_MODELS.find((item) => item.title === brand).models;
    }

    return [];
  }

  private _years!: string[];
  get years() {
    if (!this._years) {
      const arr: string[] = [];

      let i = 0;

      while (arr[0] !== '2025') {
        arr.unshift(String(1900 + i));
        i++;
      }

      this._years = arr;
    }

    return this._years;
  }

  public readonly gearboxes = [
    'Механика',
    'Автомат',
    'Типтроник',
    'Робот',
    'Вариатор',
  ];

  public readonly fuels = [
    'Бензин',
    'Газ',
    'Газ пропан-бутан / Бензин',
    'Газ метан / Бензин',
    'Гибрид',
    'Гибрид (HEV)',
    'Гибрид (PHEV)',
    'Гибрид (MHEV)',
    'Дизель',
    'Электро',
  ];

  public readonly powerTypes = ['Л/C', 'кВт'];

  public readonly drives = ['Полный', 'Передний', 'Задний'];

  get images(): FormArray {
    return this.form.get('images') as FormArray;
  }

  addImage() {
    this.images.push(this.fb.control(null, Validators.required));
  }

  removeImage(index: number) {
    if (this.images.length > 1) {
      this.images.removeAt(index);
    }
  }

  onSubmit() {
    this.appService.createCar(this.form.value).subscribe(() => {
      this.form.reset();
    });
  }
}
