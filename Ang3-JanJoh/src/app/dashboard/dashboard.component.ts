import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


// Handles control of showing appropriate div elements, logging in, deleting users
// and subscribing to json responses.

export class DashboardComponent implements OnInit {

  loggedUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private usersService: UsersService
  ) {

    //Checking and getting loggedUser from Authservice.
    this.loggedUser = authService.checkIfLoggedIn();

  }

  // Subscribes to the response provided from usersService.getUsers().
  ngOnInit() {

    this.usersService.getUsers()
      .subscribe(
        (response) => {
          this.userList = response;
        },
        (error) => console.log("error", error),
        () => console.log('completed')
      )
  }

  //Defining userList as a string array for adding users functionality
  userList: object[];

  //Adding user based on eventEmitter from edit-users-component
  addUser($event: string) {
    // this.userList.unshift($event);
  }

  //Deleting a user
  deleteUser() {
    this.userList.pop();
  }
}