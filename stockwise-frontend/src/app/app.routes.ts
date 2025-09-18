import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Features } from './pages/features/features';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'features', component: Features },
  { path: 'contact', component: Contact },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
