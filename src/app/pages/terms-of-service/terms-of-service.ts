import { Component, inject, OnInit } from '@angular/core';
import { BRAND_CONFIG } from '../../constants';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-terms-of-service',
  imports: [],
  templateUrl: './terms-of-service.html',
  styleUrl: './terms-of-service.scss'
})
export class TermsOfService implements OnInit {
  currentDate = new Date().toLocaleDateString('ru-RU');
  private readonly seoService = inject(SEOService);
  public readonly brandConfig = BRAND_CONFIG;

  ngOnInit() {
    this.seoService.setSEO('terms');
  }
}
