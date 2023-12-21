import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http:HttpClient) { }
  
  baseurl="http://localhost:4000"
  post(student:Student):Observable<Student>{
    return this.http.post<Student>(`${this.baseurl}/post`,student)

  }

  getall():Observable<Student[]>{
    return this.http.get<Student[]> (`${this.baseurl}/get`)
  }
  getbyid(id:string):Observable<Student>{
    return this.http.get<Student>(`${this.baseurl}/getbyid/`+id)
  }

  del(id:string):Observable<Student>{
    return this.http.delete<Student>(`${this.baseurl}/delete`)
  }
}
