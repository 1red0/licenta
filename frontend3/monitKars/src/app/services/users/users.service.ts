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

  // putUser(registerRequest: User){
  //   return this._http.put(environment.baseApiUrl + 'api/Users', registerRequest)
  // }
}
