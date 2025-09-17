import { Injectable } from '@angular/core';
import { ProjectConfig, getProjectConfig, getProjectByDomain } from '../config/project.config';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private currentConfig: ProjectConfig;
  private projectKey: string;

  constructor() {
    // Определяем проект по домену или используем значение по умолчанию
    this.projectKey = this.detectProject();
    this.currentConfig = getProjectConfig(this.projectKey);
  }

  private detectProject(): string {
    // В браузере определяем по window.location.hostname
    if (typeof window !== 'undefined') {
      return getProjectByDomain(window.location.hostname);
    }
    
    // Для SSR или тестов используем значение по умолчанию
    return 'adenatrans';
  }

  // Получить текущую конфигурацию
  getConfig(): ProjectConfig {
    return this.currentConfig;
  }

  // Получить ключ текущего проекта
  getProjectKey(): string {
    return this.projectKey;
  }

  // Получить настройки отображения автомобилей
  getCarDisplayConfig() {
    return this.currentConfig.carDisplay;
  }

  // Получить цветовую схему
  getColorScheme() {
    return {
      primary: this.currentConfig.primaryColor,
      secondary: this.currentConfig.secondaryColor,
      accent: this.currentConfig.accentColor
    };
  }

  // Получить SEO настройки
  getSEOConfig() {
    return this.currentConfig.seo;
  }

  // Получить контактную информацию
  getContactsConfig() {
    return this.currentConfig.contacts;
  }

  // Получить социальные сети
  getSocialConfig() {
    return this.currentConfig.social;
  }

  // Получить настройки аналитики
  getAnalyticsConfig() {
    return this.currentConfig.analytics;
  }

  // Получить фильтры по умолчанию
  getDefaultFilters() {
    return this.currentConfig.defaultFilters;
  }

  // Проверить, нужно ли показывать поле автомобиля
  shouldShowCarField(field: keyof ProjectConfig['carDisplay']): boolean {
    return Boolean(this.currentConfig.carDisplay[field]);
  }

  // Получить максимальное количество изображений
  getMaxImages(): number {
    return this.currentConfig.carDisplay.maxImages;
  }

  // Получить список брендов для фильтра
  getDefaultBrands(): string[] {
    return this.currentConfig.defaultFilters.brands;
  }

  // Получить диапазон лет
  getYearRange(): { min: number; max: number } {
    return this.currentConfig.defaultFilters.years;
  }

  // Получить диапазон цен
  getPriceRange(): { min: number; max: number } {
    return this.currentConfig.defaultFilters.priceRange;
  }

  // Получить диапазон пробега
  getMileageRange(): { min: number; max: number } {
    return this.currentConfig.defaultFilters.mileageRange;
  }

  // Применить CSS переменные для цветовой схемы
  applyColorScheme(): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', this.currentConfig.primaryColor);
      root.style.setProperty('--secondary-color', this.currentConfig.secondaryColor);
      root.style.setProperty('--accent-color', this.currentConfig.accentColor);
    }
  }

  // Переключить проект (для разработки)
  switchProject(projectKey: string): void {
    this.projectKey = projectKey;
    this.currentConfig = getProjectConfig(projectKey);
    this.applyColorScheme();
  }
}
