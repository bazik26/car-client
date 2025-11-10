import { Routes } from '@angular/router';

import { LayoutComponent } from './blocks/layout/layout.component';
import { BRAND_CONFIG } from './constants';

import { HomePage } from './pages/home/home.page';
import { SearchPage } from './pages/search/search.page';
import { CarPage } from './pages/car/car.page';
import { AboutUs } from './pages/about-us/about-us';
import { Team } from './pages/team/team';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { TermsOfService } from './pages/terms-of-service/terms-of-service';
import { Contacts } from './pages/contacts/contacts';

import { CityPage } from './pages/city/city.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePage,
        title: `${BRAND_CONFIG.name} - Продажа автомобилей в Саратове`,
      },

      {
        path: 'cars',
        children: [
          {
            path: 'search',
            component: SearchPage,
            title: `Поиск автомобилей | ${BRAND_CONFIG.name}`,
          },

          {
            path: ':carId',
            component: CarPage,
            title: 'Автомобиль',
          },
        ],
      },

      {
        path: 'about-us',
        component: AboutUs,
        title: `О компании ${BRAND_CONFIG.name}`,
      },

      {
        path: 'team',
        component: Team,
        title: 'Наша команда',
      },

      {
        path: 'privacy-policy',
        component: PrivacyPolicy,
        title: 'Политика конфиденциальности',
      },

      {
        path: 'terms-of-service',
        component: TermsOfService,
        title: 'Пользовательское соглашение',
      },

      {
        path: 'contacts',
        component: Contacts,
        title: 'Контакты',
      },

      {
        path: 'city/:cityName',
        component: CityPage,
        title: 'Пригон авто в город',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];
