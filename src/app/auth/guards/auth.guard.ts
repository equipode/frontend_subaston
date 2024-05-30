import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken;
  if (authService.isLoggedIn() || (token && token.Token && token.Token !== 'undefined')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}

