import { Routes } from '@angular/router';
import { LayoutComponent } from './blocks/layout/layout.component';
import { HomePage } from './pages/home/home.page';
import { CarPage } from './pages/car/car.page';
import { AdminPage } from './pages/admin/admin.page';
import {Team} from './pages/team/team';
import {AboutUs} from './pages/about-us/about-us';

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
      },

      {
        path: 'cars',
        children: [
          {
            path: ':carId',
            component: CarPage,
          },
        ],
      },

      {
        path: 'about-us',
        component: AboutUs,
        title: 'О компании TopCars'
      },
      {
        path: 'team',
        component: Team,
        title: 'Наша команда'
      },
    ],
  },

  {
    path: 'admin',
    component: AdminPage,
    title: 'Администрирование'
  },

  {
    path: '**',
    redirectTo: '/home'
  }
];
