import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'auth',
        loadChildren: async () => (await import('./pages/sign-in/auth/auth.module')).AuthModule
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: 'despesas',
        loadComponent: () => import('./pages/despesas/despesas.component').then(c => c.DespesasComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
      },
      {
        path: 'relatorios',
        loadComponent: () => import('./pages/relatorios/relatorios.component').then(c => c.RelatoriosComponent)
      }
    ]
  }

  // {
  //   // sistema
  //   path: ''
  // }
];
