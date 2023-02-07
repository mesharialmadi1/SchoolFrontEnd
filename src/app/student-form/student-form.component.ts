import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/SchoolService';
import { Student } from 'src/app/student';
import {Classroom} from "../classroom";
import {FormControl, FormGroup} from "@angular/forms";
import {parse, stringify, toJSON, fromJSON} from 'flatted';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{

  newStudent = new FormGroup({
    name: new FormControl(),
    major: new FormControl(),
    email: new FormControl(),
    classroomIds: new FormControl()
  });
  classrooms: any[] = []
  classroomIds: any[] = []
  ngOnInit() {
    this.schoolService.getAllClassrooms().subscribe(data => {
      this.classrooms = data;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private schoolService: SchoolService) {
    // this.student = new Student();
  }

  onSubmit() {
    console.log(this.newStudent.value);
    this.schoolService.newStudent(this.newStudent.value).subscribe(result => this.gotoStudentList());
  }

  gotoStudentList() {
    this.router.navigate(['/getStudents']);
  }
}
