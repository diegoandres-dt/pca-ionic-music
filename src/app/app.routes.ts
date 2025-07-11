import { Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'principal',
        loadComponent: () => import('./pages/principal/principal.page').then(m => m.PrincipalPage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/search/search.page').then(m => m.SearchPage)
      },
      {
        path: 'library',
        loadComponent: () => import('./pages/library/library.page').then(m => m.LibraryPage)
      },
      {
        path: '',
        redirectTo: 'tabs/principal',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/principal ',
    pathMatch: 'full',
  },
];