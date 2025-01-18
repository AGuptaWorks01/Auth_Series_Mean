import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiurls } from '../api.urls';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  platformId: any;
  http = inject(HttpClient);
  isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());

  resgisterService(registerObj: any): Observable<any> {
    return this.http.post<any>(
      `${apiurls.authServiceApi}register`,
      registerObj
    );
  }

  loginService(loginObj: any): Observable<any> {
    return this.http.post<any>(
      `${apiurls.authServiceApi}login`,
      loginObj // { withCredentials: true, }
    );
  }

  sendEmailService(email: string): Observable<any> {
    return this.http.post<any>(`${apiurls.authServiceApi}send-email`, {
      email: email,
    });
  }

  ResetPasswordService(resetObj: {
    token: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(
      `${apiurls.authServiceApi}reset-password`,
      resetObj
    );
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('user_id');
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user_id');
    this.isLoggedIn$.next(false);
  }
}
