import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Classroom } from './classroom';
import { Observable } from 'rxjs';
import {FormGroup} from "@angular/forms";

@Injectable()
export class SchoolService {

  url: string;

  constructor(private http: HttpClient) {
     this.url = 'http://localhost:8080/api/';

  }

  public getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url+'students');
  }

  public getAllClassrooms():Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.url+'classrooms');
}

  // public newStudent(student: Student) {
  //   return this.http.post<Student>(this.url+'students', student);
  // }
  public newStudent(student: any){
    return this.http.post<Student>(this.url+'students', student);
  }
}
