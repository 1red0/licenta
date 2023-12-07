import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(
      environment.autority + '/admin/realms/' + environment.autorityRealm + '/users'
    );
  }

  getDrivers(): Observable<User[]> {
    return this._http.get<User[]>(
      environment.autority + '/admin/realms/' + environment.autorityRealm + '/roles/driver/users'
    );
  }

  getUser(id: string): Observable<User> {
    return this._http.get<User>(
      environment.autority + '/admin/realms/' + environment.autorityRealm + '/users/' + id
    );
  }
}
