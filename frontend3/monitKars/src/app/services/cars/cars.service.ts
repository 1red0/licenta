import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Car } from 'src/app/models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _http:HttpClient) { }

  getcars(): Observable<Car[]>{
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars')
  }

  getcar(id: number): Observable<Car[]>{
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars/' + id)
  }
}
