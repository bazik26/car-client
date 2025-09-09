import { Component } from '@angular/core';
import { BRAND_CONFIG } from '../../constants';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  brandConfig = BRAND_CONFIG;
}
