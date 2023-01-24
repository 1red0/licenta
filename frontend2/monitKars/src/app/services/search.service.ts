import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl = environment.baseApiUrl + '/search';

  constructor(private http: HttpClient) { }

  search(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.searchUrl}?term=${term}`);
  }
}
