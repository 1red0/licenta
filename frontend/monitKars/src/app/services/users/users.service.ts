import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(private _http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(environment.baseApiUrl + 'api/Users')
  }

  getUsers2(): Observable<User[]>{
    return this._http.get<User[]>("http://localhost:4335/admin/realms/master/users")
  }

  getUser(id: number): Observable<User>{
    return this._http.get<User>(environment.baseApiUrl + 'api/Users/' + id)
  }

  getUsername(username: string): Observable<User>{
    return this._http.get<User>(environment.baseApiUrl + 'api/Users/username/' + username);
  }

  updateUser(id: number, user: User): Observable<User>{
    return this._http.put<User>(environment.baseApiUrl + 'api/Users/' + id, user)
  }

  postUser(user: User): Observable<User>{
    return this._http.post<User>(environment.baseApiUrl + 'api/Users', user)
  }

  deleteUser(id: number): Observable<User>{
    return this._http.delete<User>(environment.baseApiUrl + 'api/Users/' + id)
  }

  getDrivers(role: string): Observable<User[]>{
    return this._http.get<User[]>(environment.baseApiUrl + 'api/Users/role/' + role)
  }

  getAdmin(id: number): Observable<User>{
    return this._http.get<User>(environment.baseApiUrl + 'api/Users/' + id)
  }
  
}
