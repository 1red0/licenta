import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from 'src/app/models/car.model';
import { Observable } from 'rxjs';
import { CarMilage } from 'src/app/models/carMilage.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private _http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars');
  }

  searchCars(searchQuery: string): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/searchCar/' + searchQuery
    );
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

  getNumberOfCarsManufacturers(manufacturer: string): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/noCars/' + manufacturer
    );
  }

  getStatuses(): Observable<string[]> {
    return this._http.get<string[]>(
      environment.baseApiUrl + 'api/Cars/statuses'
    );
  }

  getStatusNoCars(status: string): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/noCarsStatus/' + status
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

  getVignetteValidNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoVignetteValidCars'
    );
  }

  getVignetteInvalidNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoVignetteInvalidCars'
    );
  }

  getInsuranceValidNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoInsuranceValidCars'
    );
  }

  getInsuranceInvalidNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoInsuranceInvalidCars'
    );
  }

  getInspectionValidNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoInspectionValidCars'
    );
  }

  getInspectionInvalidNoCars(): Observable<number> {
    return this._http.get<number>(
      environment.baseApiUrl + 'api/Cars/NoInspectionInvalidCars'
    );
  }

  getStatusCars(status: string): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/CarsStatus/' + status
    );
  }

  getFreeCars(): Observable<Car[]> {
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars/FreeCars');
  }

  getTakenCars(): Observable<Car[]> {
    return this._http.get<Car[]>(environment.baseApiUrl + 'api/Cars/TakenCars');
  }

  getVignetteValidCars(): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/VignetteValidCars'
    );
  }

  getVignetteInvalidCars(): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/VignetteInvalidCars'
    );
  }

  getInsuranceValidCars(): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/InsuranceValidCars'
    );
  }

  getInsuranceInvalidCars(): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/InsuranceInvalidCars'
    );
  }

  getInspectionValidCars(): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/InspectionValidCars'
    );
  }

  getInspectionInvalidCars(): Observable<Car[]> {
    return this._http.get<Car[]>(
      environment.baseApiUrl + 'api/Cars/InspectionInvalidCars'
    );
  }

  getMilageOfCars(): Observable<CarMilage> {
    return this._http.get<CarMilage>(
      environment.baseApiUrl + 'api/Cars/milage'
    );
  }
}
