import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from '../users.service';
import { UserFull } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

// Handles changing color of text, inout for users, and toggle for user text

export class UsersListComponent implements OnInit {

  user: UserFull[];
  constructor(private usersService: UsersService) {
    
  }

  ngOnInit() {

  }

  //Input for users string array
  @Input() users: object[];


  //A toggle for colors
  myToggle: boolean = true;

  //Toggling user colors
  toggleColors() {
    this.myToggle = !this.myToggle;
  }

  //Changing user colors dependent on the toggle state
  changeIt(): string {
    if (this.myToggle) {
      return "purple";
    }
    else {
      return "olivedrab";
    }
  }
}