import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ContactUsComponent} from '../../blocks/contact-us/contact-us.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [
    NgForOf
  ],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team implements AfterViewInit {
  teamMembers = [
    {
      name: 'Александр Петров',
      position: 'Основатель компании',
      experience: '12 лет опыта',
      bio: 'Специалист по китайскому авторынку. Лично импортировал более 500 автомобилей. Знает все тонкости работы с китайскими производителями.',
      photo: 'assets/team1.jpg',
      skills: ['Китайский авторынок', 'Переговоры', 'Стратегическое планирование']
    },
    {
      name: 'Дмитрий Иванов',
      position: 'Главный логист',
      experience: '8 лет опыта',
      bio: 'Организует доставку авто из любой точки мира. Знает все тонкости таможенного оформления и оптимизации логистических процессов.',
      photo: 'assets/team2.jpg',
      skills: ['Международная логистика', 'Таможенное оформление', 'Документация']
    },
    {
      name: 'Екатерина Смирнова',
      position: 'Менеджер по клиентам',
      experience: '6 лет опыта',
      bio: 'Поможет подобрать авто по вашим параметрам и ответит на все вопросы. Сопровождает клиента на всех этапах сделки.',
      photo: 'assets/team3.jpg',
      skills: ['Работа с клиентами', 'Консультации', 'Подбор авто']
    },
    {
      name: 'Михаил Волков',
      position: 'Технический специалист',
      experience: '10 лет опыта',
      bio: 'Проводит диагностику и технический осмотр автомобилей перед отправкой клиенту. Гарантирует качество и надежность каждого авто.',
      photo: 'assets/team4.jpg',
      skills: ['Диагностика авто', 'Технический осмотр', 'Сервисное обслуживание']
    }
  ];

  constructor(private modalService: BsModalService) {}

  openContactUsModal() {
    this.modalService.show(ContactUsComponent);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.team-member').forEach(el => {
      observer.observe(el);
    });
  }



}
