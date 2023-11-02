import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: async () => (await import('./pages/sign-in/auth/auth.module')).AuthModule
  },
  {
    // home
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  }
  // {
  //   // sistema
  //   path: ''
  // }
];
