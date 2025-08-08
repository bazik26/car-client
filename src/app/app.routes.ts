import {Routes} from '@angular/router';

import {LayoutComponent} from './blocks/layout/layout.component';

import {HomePage} from './pages/home/home.page';
import {CarPage} from './pages/car/car.page';
import {AboutUs} from './pages/about-us/about-us';
import {Team} from './pages/team/team';

import {AdminCarsPage} from './pages/admin/pages/cars/cars.page';
import {SigninPage} from './pages/admin/pages/login/signin.page';

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
    children: [
      {
        path: 'signin',
        component: SigninPage, // <--- ДОЛЖЕН БЫТЬ ТВОЙ SigninPage
      },
      {
        path: 'cars',
        component: AdminCarsPage,
        canActivate: [],
      },
      // {
      //   path: 'admins',
      //   component: AdminsManagementPage,
      //   canActivate: [AuthGuard, SuperAdminGuard],
      // },
    ],
  },

  {
    path: '**',
    redirectTo: '/home'
  }
];
