import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () => (await import('./pages/sign-in/auth/auth.module')).AuthModule
  },
  {
    // home
    path: ''
  },
  {
    // sistema
    path: ''
  }
];
