import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppService } from '../../app.service';
import { SEOService } from '../../services/seo.service';
import { CITIES_CONFIG, getCityByName, CityConfig } from '../../config/cities.config';
import { BRAND_CONFIG } from '../../constants';

import { CarItemComponent } from '../../blocks/car-item/car-item.component';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, CarItemComponent],
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss']
})
export class CityPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly appService = inject(AppService);
  private readonly seoService = inject(SEOService);

  public cityConfig: CityConfig | null = null;
  public cars: any[] = [];
  public isLoading = true;
  public brandConfig = BRAND_CONFIG;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cityName = params['cityName'];
      this.loadCityData(cityName);
    });
  }

  private loadCityData(cityName: string) {
    const foundCity = getCityByName(cityName);
    this.cityConfig = foundCity || null;
    
    if (!this.cityConfig) {
      // Если город не найден, перенаправляем на главную
      this.router.navigate(['/home']);
      return;
    }

    this.setCitySEO();
    this.loadCars();
  }

  private setCitySEO() {
    if (!this.cityConfig) return;

    const cityName = this.cityConfig.name;
    const region = this.cityConfig.region;
    
    const seoData = {
      city: cityName,
      region: region,
      brandName: BRAND_CONFIG.name,
      phone: BRAND_CONFIG.phone
    };

    // Устанавливаем динамические SEO теги для города
    this.seoService.setTitle(`${BRAND_CONFIG.name} - Пригон автомобилей из Европы в ${cityName}`);
    
    this.seoService.setDescription(
      `${BRAND_CONFIG.name} - пригон автомобилей из Европы в ${cityName}, ${region}. ` +
      `Подбор, покупка, доставка и растаможка автомобилей под ключ. ` +
      `Гарантия прозрачности сделки и выгодные условия. Звоните: ${BRAND_CONFIG.phone}`
    );

    this.seoService.setKeywords(
      `пригон авто ${cityName}, авто из Европы ${region}, купить авто ${cityName}, ` +
      `растаможка ${cityName}, доставка авто ${region}, автомобили под ключ ${cityName}, ` +
      `${BRAND_CONFIG.name}, ${cityName}, ${region}`
    );

    // Устанавливаем Open Graph теги
    this.seoService.setMetaTag('og:title', `${BRAND_CONFIG.name} - Авто из Европы в ${cityName}`);
    this.seoService.setMetaTag('og:description', `Пригон авто из Европы в ${cityName} с ${BRAND_CONFIG.name}. Подбор, доставка и растаможка.`);
    this.seoService.setMetaTag('og:url', `${BRAND_CONFIG.website}/city/${cityName.toLowerCase()}`);
    
    // Устанавливаем Twitter Card теги
    this.seoService.setMetaTag('twitter:title', `${BRAND_CONFIG.name} - Пригон авто в ${cityName}`);
    this.seoService.setMetaTag('twitter:description', `Купи автомобиль из Европы в ${cityName} с ${BRAND_CONFIG.name}.`);
    
    // Добавляем структурированные данные для локального бизнеса
    this.addStructuredData();
  }

  private addStructuredData() {
    if (!this.cityConfig) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": BRAND_CONFIG.name,
      "description": `Пригон автомобилей из Европы в ${this.cityConfig.name}`,
      "url": `${BRAND_CONFIG.website}/city/${this.cityConfig.name.toLowerCase()}`,
      "telephone": BRAND_CONFIG.phone,
      "email": BRAND_CONFIG.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": this.cityConfig.name,
        "addressRegion": this.cityConfig.region,
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": this.cityConfig.coordinates.latitude,
        "longitude": this.cityConfig.coordinates.longitude
      },
      "areaServed": {
        "@type": "City",
        "name": this.cityConfig.name
      },
      "serviceType": "Пригон автомобилей из Европы",
      "priceRange": "$$"
    };

    // Удаляем предыдущие структурированные данные
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Добавляем новые структурированные данные
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private loadCars() {
    this.isLoading = true;
    this.appService.getCars({ limit: 12 }).subscribe({
      next: (cars) => {
        this.cars = cars;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading cars:', error);
        this.isLoading = false;
      }
    });
  }

  getCityKeywords(): string[] {
    return this.cityConfig?.keywords || [];
  }

  getCityPopulation(): string {
    if (!this.cityConfig?.population) return '';
    return this.cityConfig.population.toLocaleString();
  }
}
