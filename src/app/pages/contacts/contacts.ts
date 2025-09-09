import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BRAND_CONFIG } from '../../constants';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  brandConfig = BRAND_CONFIG;
  
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://yandex.ru/map-widget/v1/?um=constructor%3Af5645be8693c0f08c0fd3415c4355b42182db5e4ee778a68062b49b859adf9eb&source=constructor'
    );
  }
}
