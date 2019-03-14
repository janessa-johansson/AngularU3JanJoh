import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

// COMMENT ON FULL CLASS AND WHAT IT DOES. DON'T FORGET.

export class UserListItemComponent implements OnInit {


  constructor(private usersService: UsersService) { }

  ngOnInit() {
  
  }

  
  //Input for user and textColor (string)
  @Input() user: object;
  @Input() textColor: string;
  


  //Getting user colors
  getColor(): Object {
    return { "color": this.textColor };
  }
}