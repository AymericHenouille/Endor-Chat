import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  public canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuth$.pipe(
      switchMap(isAuth => isAuth ? of(true) : this.router.navigate(['/auth/signin']))
    );
  }

}
