import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


// Users Service...
// 1) provides json url
// 2) has two methods (getUsers and getUser) which gets json url and makes it an observable

export class UsersService {

  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl)
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any>(this.usersUrl + id)
  }
}
