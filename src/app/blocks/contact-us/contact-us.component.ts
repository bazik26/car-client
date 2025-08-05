import { Component, inject } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  imports: [
    FormsModule
  ]
})
export class ContactUsComponent {
  public readonly activeModal = inject(BsModalRef);

  selectedMessenger: string = 'whatsapp';
  contactData = {
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  };


  submitContactForm() {
    // Здесь логика отправки данных
    console.log('Выбран мессенджер:', this.selectedMessenger);
    console.log('Данные:', this.contactData);

    // После отправки можно закрыть модалку
    // this.activeModal.close();

    // Или показать сообщение об успехе
    // this.showSuccessMessage();
  }

  showSuccessMessage() {
    // Реализация показа сообщения об успешной отправке
  }
}
