import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login').then(m => m.Login)
  },

  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home)
  },

  {
    path: 'nombre',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/search-by-name/search-by-name').then(m => m.SearchByName)
  },

  {
    path: 'letra',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/search-by-letter/search-by-letter').then(m => m.SearchByLetter)
  },

  {
    path: 'random',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/random-meal/random-meal').then(m => m.RandomMeal)
  },

  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found').then(m => m.NotFound)
  }
];
