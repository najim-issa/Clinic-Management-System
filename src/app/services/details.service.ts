import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  getDetailsList():Observable<any> {
    return this._http.get('http://localhost:3000/moreDetails');
  }
  close() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }

  addDetails(data : any): Observable<any>{
    return this._http.post('http://localhost:3000/moreDetails', data);
  }

deleteDetails(id: number):Observable<any>{
  return this._http.delete(`http://localhost:3000/moreDetails/${id}`);
}
}
