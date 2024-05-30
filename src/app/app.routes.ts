import { Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { authGuard } from './auth/guards/auth.guard';
import { tokenExpirationGuard } from './auth/guards/tokenExpiration.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => AuthModule
  },
  {
    path: 'home',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
    canActivate: [authGuard, tokenExpirationGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
