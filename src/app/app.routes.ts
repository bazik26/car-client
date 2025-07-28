import { Routes } from '@angular/router';

import { LayoutComponent } from './blocks/layout/layout.component';

import { HomePage } from './pages/home/home.page';
import { CarPage } from './pages/car/car.page';

import { AdminPage } from './pages/admin/admin.page';

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
    ],
  },

  {
    path: 'admin',
    component: AdminPage,
  },
];
