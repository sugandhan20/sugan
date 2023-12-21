import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Officedetails } from './officedetails';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) { }
  baseurl="http://localhost:8080";
  add(Office: Officedetails): Observable<Officedetails> {
    return this.http.post<Officedetails>(`${this.baseurl}/add`, Office)
  }
  getalloff(): Observable<Officedetails[]> {
    return this.http.get<Officedetails[]>(`${this.baseurl}/getall`)
  }
  get(id: number): Observable<Officedetails> {
    return this.http.get<Officedetails>(`${this.baseurl}/id/${id}`)
  }
  delete(id: number): Observable<Officedetails> {
    return this.http.delete<Officedetails>(`${this.baseurl}/delete/${id}`)
  }
  update(id: number, Office: Officedetails): Observable<Officedetails> {
    return this.http.put<Officedetails>(`${this.baseurl}/update/${id}`, Office)
  }
}
