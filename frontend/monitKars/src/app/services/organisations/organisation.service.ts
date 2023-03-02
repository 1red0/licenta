import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Organisation } from 'src/app/models/organisation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private _http:HttpClient) { }

  getOrganisations(): Observable<Organisation[]>{
    return this._http.get<Organisation[]>(environment.baseApiUrl + 'api/Organisations')
  }

  getOrganisation(id: number): Observable<Organisation>{
    return this._http.get<Organisation>(environment.baseApiUrl + 'api/Organisations/' + id)
  }

  getOrganisationName(name: string){
    return this._http.get<Organisation>(environment.baseApiUrl + 'api/Organisations/name/' + name)
  }

  updateOrganisation(id: number, Organisation: Organisation): Observable<Organisation>{
    return this._http.put<Organisation>(environment.baseApiUrl + 'api/Organisations/' + id, Organisation)
  }

  postOrganisation(Organisation: Organisation): Observable<Organisation>{
    return this._http.post<Organisation>(environment.baseApiUrl + 'api/Organisations', Organisation)
  }

  deleteOrganisation(id: number): Observable<Organisation>{
    return this._http.delete<Organisation>(environment.baseApiUrl + 'api/Organisations/' + id)
  }
}
