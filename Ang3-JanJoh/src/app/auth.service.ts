import { Injectable } from '@angular/core';
import { AdminFull } from './admin-full.model';

@Injectable({
  providedIn: 'root'
})

// Authorization Service. Checks if...
// 1) a user can login based on pseudo backend with users and login information;
// 2) a user is logged in or not; 
// 3) and handles the login/logout functions.

export class AuthService {

  loggedUser: string;


  constructor() {

  }
  // Method that checks if the user is logged in or not based on getting a
  // value from local storage.
  checkIfLoggedIn() {
    return localStorage.getItem('email');
  }

  // Method that handles logging in a user.
  // Stores email in local storage and sets loggedUser to a value.
  // Usage: loggedUser determines which divs to show on login.component and dashboard.

  public login(email) {
    localStorage.setItem('email', email);
    this.loggedUser = "exists";
  }


  // Method that handles logging out a user.
  // Clears local storage and sets loggedUser to undefined.
  // Usage: loggedUser determines which divs to show on login.component and dashboard.

  public logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }

  // Serves as a pseudo backend with user login information.
  // Both login AND password must match in order to log in.
  public admins: AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];
}