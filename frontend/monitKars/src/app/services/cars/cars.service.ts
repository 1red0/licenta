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

  getCars(): Observable<Car[]>{
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars')
  }

  getCar(id: number): Observable<Car[]>{
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars/' + id)
  }

  postCar(car: Car): Observable<Car[]>{
    return this._http.post<Car[]>(environment.baseApiUrl + 'api/Cars', car)
  }

  deleteCar(id: number): Observable<Car[]>{
    return this._http.delete<Car[]>(environment.baseApiUrl + 'api/Cars/' + id)
  }

  updateCar(id: number, car: Car): Observable<Car[]>{
    return this._http.put<Car[]>(environment.baseApiUrl + 'api/Cars/' + id, car)
  }
}
