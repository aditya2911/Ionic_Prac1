import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    
    path: 'profile',
    loadComponent: () => import('./profile-screen/profile-screen.page').then( m => m.ProfileScreenPage)
  },
];
