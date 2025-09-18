import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { AppService } from '../../app.service';
import { BRAND_CONFIG } from '../../constants';
import { SEOService } from '../../services/seo.service';

import { CarItemComponent } from '../../blocks/car-item/car-item.component';
import { ContactUsComponent } from '../../blocks/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarItemComponent, RouterModule, CurrencyPipe, NgOptimizedImage],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  public readonly modal = inject(BsModalService);
  public readonly appService = inject(AppService);
  public readonly brandConfig = BRAND_CONFIG;
  private readonly seoService = inject(SEOService);

  public recentCars: any[] = []; // Последние 10 добавленных машин
  public specialOfferCars: any[] = []; // 10 случайных машин со скидкой
  public isLoading = true;

  public ngOnInit() {
    this.seoService.setSEO('home');
    this.loadRecentCars();
    this.loadSpecialOfferCars();
  }

  private loadRecentCars() {
    // Загружаем последние 10 добавленных машин
    this.appService.getCars({ limit: 10, sortBy: 'createdAt', sortOrder: 'DESC' })
      .subscribe((cars: any[]) => {
        // Дополнительная фильтрация на фронтенде (на всякий случай)
        const availableCars = cars.filter(car => !car.isSold && !car.deletedAt);
        // Случайно перемешиваем автомобили для разнообразия
        const shuffledCars = this.shuffleArray(availableCars);
        console.log('Recent cars loaded:', shuffledCars.length, shuffledCars);
        this.recentCars = shuffledCars;
        this.isLoading = false;
      });
  }

  private loadSpecialOfferCars() {
    // Загружаем 10 случайных машин для спецпредложения
    this.appService.getCars({ limit: 10, random: true })
      .subscribe((cars: any[]) => {
        // Дополнительная фильтрация на фронтенде (на всякий случай)
        const availableCars = cars.filter(car => !car.isSold && !car.deletedAt);
        // Случайно перемешиваем автомобили для разнообразия
        const shuffledCars = this.shuffleArray(availableCars);
        // Ограничиваем до 10 машин и добавляем скидки
        this.specialOfferCars = shuffledCars.slice(0, 10).map((car: any) => ({
          ...car,
          originalPrice: car.price,
          discountedPrice: Math.round(car.price * (0.92 + Math.random() * 0.08)) // Скидка 5-10%
        }));
      });
  }

  openContactUsModal() {
    this.modal.show(ContactUsComponent);
  }

  // Вычисляем процент скидки
  getDiscountPercentage(originalPrice: number, discountedPrice: number): number {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  }

  // Скролл к следующей секции
  scrollToNextSection() {
    const nextSection = document.querySelector('.recent-cars-section');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Случайно перемешивает массив автомобилей
   * @param array - массив автомобилей для перемешивания
   * @returns перемешанный массив
   */
  private shuffleArray(array: any[]): any[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}
