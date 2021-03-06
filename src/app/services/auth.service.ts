import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
      public email: string,
      public password: string) { }
}
let users = [
  new User('admin@admin.com', '1234'),
  new User('user1@gmail.com', '1234'),
  new User('Harry@TST.com', 'hwisgp')
];

@Injectable()
export class AuthService {

  constructor(
      private _router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['Login']);
  }

  login(user: any) {
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this._router.navigate(['home']);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem('user') === null) {
      this._router.navigate(['Login']);
    }
  }

}
