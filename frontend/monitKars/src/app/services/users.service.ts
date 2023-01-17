import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  authenticate(authenticateRequest: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + 'Users/authenticate', authenticateRequest);
  }

  register(registerRequest: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + 'Users/register', registerRequest);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + 'Users')

  }

}
