import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
