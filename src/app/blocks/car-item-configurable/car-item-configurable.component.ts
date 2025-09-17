import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppService } from '../../app.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-car-item-configurable',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './car-item-configurable.component.html',
  styleUrls: ['./car-item-configurable.component.scss']
})
export class CarItemConfigurableComponent implements OnInit {
  @Input() car: any;
  
  private readonly appService = inject(AppService);
  private readonly projectService = inject(ProjectService);
  
  public config: any;
  public displayConfig: any;

  ngOnInit() {
    this.config = this.projectService.getConfig();
    this.displayConfig = this.projectService.getCarDisplayConfig();
  }

  // Проверки для отображения полей
  get showPrice(): boolean {
    return this.displayConfig.showPrice;
  }

  get showMileage(): boolean {
    return this.displayConfig.showMileage;
  }

  get showYear(): boolean {
    return this.displayConfig.showYear;
  }

  get showEngine(): boolean {
    return this.displayConfig.showEngine;
  }

  get showPower(): boolean {
    return this.displayConfig.showPower;
  }

  get showFuel(): boolean {
    return this.displayConfig.showFuel;
  }

  get showGearbox(): boolean {
    return this.displayConfig.showGearbox;
  }

  get showDrive(): boolean {
    return this.displayConfig.showDrive;
  }

  get showDescription(): boolean {
    return this.displayConfig.showDescription;
  }

  get showOptions(): boolean {
    return this.displayConfig.showOptions;
  }

  get showImages(): boolean {
    return this.displayConfig.showImages;
  }

  get maxImages(): number {
    return this.displayConfig.maxImages;
  }

  // Получить изображения с учетом лимита
  get carImages(): any[] {
    if (!this.car.files || !this.showImages) return [];
    return this.car.files.slice(0, this.maxImages);
  }

  // Получить опции с учетом конфигурации
  get carOptions(): string[] {
    if (!this.showOptions || !this.car) return [];
    
    const options: string[] = [];
    const optionGroups = ['group1', 'group2', 'group3', 'group4', 'group5', 'group6', 'group7', 'group8', 'group9'];
    
    optionGroups.forEach(group => {
      if (this.car[group] && Array.isArray(this.car[group])) {
        options.push(...this.car[group]);
      }
    });
    
    return options.slice(0, 10); // Ограничиваем количество опций
  }

  // Получить URL файла
  getFileUrl(image: any): string {
    return this.appService.getFileUrl(image);
  }

  // Получить цветовую схему
  get primaryColor(): string {
    return this.config.primaryColor;
  }

  get secondaryColor(): string {
    return this.config.secondaryColor;
  }

  get accentColor(): string {
    return this.config.accentColor;
  }

  // Форматирование данных
  formatMileage(mileage: number): string {
    return mileage ? `${mileage.toLocaleString()} км` : 'Не указан';
  }

  formatEngine(engine: number): string {
    return engine ? `${engine} л` : 'Не указан';
  }

  formatPower(power: number): string {
    return power ? `${power} л.с.` : 'Не указана';
  }

  formatPrice(price: number): string {
    return price ? `${price.toLocaleString()} ₽` : 'Цена не указана';
  }
}
