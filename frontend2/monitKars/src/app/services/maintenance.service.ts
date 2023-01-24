import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maintenance } from '../models/maintenance.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private maintenanceUrl = environment.baseApiUrl + '/maintenance';

  constructor(private http: HttpClient) { }

  getMaintenances(): Observable<Maintenance[]> {
    return this.http.get<Maintenance[]>(this.maintenanceUrl);
  }

  updateMaintenance(id: number, maintenance: Maintenance): Observable<Maintenance> {
    return this.http.put<Maintenance>(`${this.maintenanceUrl}/${id}`, maintenance);
  }

  addMaintenance(maintenance: Maintenance): Observable<Maintenance> {
    return this.http.post<Maintenance>(this.maintenanceUrl, maintenance);
  }

  deleteMaintenance(id: number): Observable<Maintenance> {
    return this.http.delete<Maintenance>(`${this.maintenanceUrl}/${id}`);
  }
}
