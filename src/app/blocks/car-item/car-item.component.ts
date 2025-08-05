import {CurrencyPipe} from '@angular/common';
import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-car-item',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarItemComponent {
  @Input()
  public car!: any;
}
