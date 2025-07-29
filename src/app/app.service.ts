import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(protected readonly http: HttpClient) {}

  getAllBrandsAndModels(): Observable<any> {
    return this.http
      .get(`http://localhost:3001/all-brands-and-models`)
      .pipe(map((response) => response));
  }

  getCars(): Observable<any> {
    return this.http
      .get(`http://localhost:3001/cars`)
      .pipe(map((response) => response));
  }

  getCarsAll(): Observable<any> {
    return this.http
      .get(`http://localhost:3001/cars/all`)
      .pipe(map((response) => response));
  }

  createCar(car: any): Observable<any> {
    return this.http
      .post(`http://localhost:3001/cars`, car)
      .pipe(map((response) => response));
  }

  getCar(carId: number): Observable<any> {
    return this.http
      .get(`http://localhost:3001/cars/${carId}`)
      .pipe(map((response) => response));
  }

  updateCar(carId: number, car: any): Observable<any> {
    return this.http
      .patch(`http://localhost:3001/cars/${carId}`, car)
      .pipe(map((response) => response));
  }

  deleteCar(carId: number): Observable<any> {
    return this.http
      .delete(`http://localhost:3001/cars/${carId}`)
      .pipe(map((response) => response));
  }

  restoreCar(carId: number): Observable<any> {
    return this.http
      .get(`http://localhost:3001/cars/${carId}/restore`)
      .pipe(map((response) => response));
  }
}
