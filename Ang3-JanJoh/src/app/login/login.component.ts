import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// LoginComponent...
// 1) Validates email/password entered by user.
// 2) Fires off methods that log user in and out by using authService.

export class LoginComponent implements OnInit {

  email: string;
  loggedUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Getting loggedUser from Authservice
    this.loggedUser = authService.checkIfLoggedIn();

  }

  ngOnInit() {

  }

  // Uses authService function for user login and redirects to dashboard.
  login(): void {
    this.authService.login(this.model.email);
    this.router.navigate(['/dashboard']);

  }

  // Uses authService function for user logout and chcks if user is logged in.
  logout(): void {
    this.authService.logout();
    this.loggedUser = this.authService.checkIfLoggedIn();
  }
  // Uses authService function to check if user is logged in
  checklog(): void {
    this.loggedUser = this.authService.checkIfLoggedIn();
  }

  // Sets model object to any.
  model: any = {};


  // Validates login on form submit.
  onSubmit() {
    this.validateLogin();
  }


  // Validates login password and email based on the psuedo backend in authService.
  // If BOTH login/email matches authService, the login() method fires.
  // If login/email doesn't match, user is rerouted to login and a invalid message is shown.

  showDiv: boolean = false;

  validateLogin(): void {
    const johnEmail = this.authService.admins[0].email;
    const johnPassword = this.authService.admins[0].password;

    const kylieEmail = this.authService.admins[1].email;
    const kyliePassword = this.authService.admins[1].password;

    if (this.model.email == johnEmail && this.model.password == johnPassword) {
      this.login();
    } else if (this.model.email == kylieEmail && this.model.password == kyliePassword) {
      this.login();
    } else {
      this.showDiv = true;
      this.router.navigate(['/login']);
    }
  }

}