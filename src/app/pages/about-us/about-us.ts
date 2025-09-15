import { Component, inject, OnInit } from '@angular/core';
import { BRAND_CONFIG } from '../../constants';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs implements OnInit {
  brandConfig = BRAND_CONFIG;
  private readonly seoService = inject(SEOService);

  ngOnInit() {
    this.seoService.setSEO('about');
  }
}
