import { Component, inject, OnInit } from '@angular/core';
import { BRAND_CONFIG } from '../../constants';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy implements OnInit {
  currentDate = new Date().toLocaleDateString('ru-RU');
  private readonly seoService = inject(SEOService);
  public readonly brandConfig = BRAND_CONFIG;

  ngOnInit() {
    this.seoService.setSEO('privacy');
    console.log('Privacy Policy - brandConfig:', this.brandConfig);
    console.log('Privacy Policy - email:', this.brandConfig.email);
  }
}
