import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})

// COMMENT ON FULL CLASS AND WHAT IT DOES. DON'T FORGET.

export class SingleuserComponent implements OnInit {

  userId: any;
  user: any;

  constructor(private route: ActivatedRoute,
    private userService: UsersService) {
    }

  ngOnInit() {
    
    // Subscribing to parameters of the route url, which is then used to print the
    // user name on the singleuser html.
    this.route.params.subscribe(params => {
      this.userId = params.id;
    });


    this.userService.getUser(this.userId).subscribe(
      (response) => {
        this.user = response;
        console.log(response)
      },
      (error) => console.log("error", error),
      () => console.log('completed')
    )
    
  }
}

    



