import { Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => AuthModule
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
