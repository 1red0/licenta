import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from 'src/app/models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private _http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars');
  }

  getDriverCars(driverID: string): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/driverCars/' + driverID
    );
  }

  getNoCars(): Observable<string> {
    return this._http.get(environment.baseApiUrl + 'api/Cars/noCars', {
      responseType: 'text',
    });
  }

  getCar(id: number): Observable<Car> {
    return this._http.get<Car>(environment.baseApiUrl + 'api/Cars/' + id);
  }

  postCar(car: Car): Observable<Car> {
    return this._http.post<Car>(environment.baseApiUrl + 'api/Cars', car);
  }

  deleteCar(id: number) {
    return this._http.delete(environment.baseApiUrl + 'api/Cars/' + id);
  }

  updateCar(id: number, car: Car) {
    return this._http.put(environment.baseApiUrl + 'api/Cars/' + id, car);
  }

  getManufacturers(): Observable<string[]> {
    return this._http.get<string[]>(
      environment.baseApiUrl + 'api/Cars/manufacturers'
    );
  }

  getStatuses(): Observable<string[]> {
    return this._http.get<string[]>(
      environment.baseApiUrl + 'api/Cars/statuses'
    );
  }

  getFreeNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoFreeCars'
    );
  }

  getTakenNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoTakenCars'
    );
  }

  getStatusNoCars(status: string): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/noCarsStatus/' + status
    );
  }

  getNumberOfCarsManufacturers(manufacturer: string): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/noCars/' + manufacturer
    );
  }
}
