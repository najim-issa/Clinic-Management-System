import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {
  private apiUrl = 'http://localhost:3000/moreDetails';
  constructor(private http: HttpClient) { }

  public getEndpointData(): Observable<any> {
    const url = `${this.apiUrl}/endpoint`; 

    return this.http.get(url);
  }

  public postEndpointData(data: any): Observable<any> {
    const url = `${this.apiUrl}/endpoint`;

    return this.http.post(url, data);
  }

}
