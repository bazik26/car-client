import { CurrencyPipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-car-item',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarItemComponent {
  public readonly appService = inject(AppService);

  @Input()
  public car!: any;
}
