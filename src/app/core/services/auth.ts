import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = 'olimp_user';

  private readonly validUser = {
    username: 'Emma',
    password: 'Emm@1234'
  };

  constructor() { }

  login(username: string, password: string): boolean {

    if (
      username === this.validUser.username &&
      password === this.validUser.password
    ) {
      const user: User = {
        username
      };

      localStorage.setItem(this.USER_KEY, JSON.stringify(user));

      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.USER_KEY) !== null;
  }

  getUser(): User | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) as User : null;
  }

}
