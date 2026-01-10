import { Routes } from '@angular/router';

/**
 * Configuración de rutas
 * Todas las secciones están en la misma página (landing page)
 * Usamos lazy loading para mejor performance
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/hero/hero.component').then((m) => m.HeroComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
