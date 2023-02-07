import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { SchoolService } from 'src/app/SchoolService';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[];

  constructor(private schoolService: SchoolService) {
  }

  ngOnInit() {
    this.schoolService.getAll().subscribe(data => {
      this.students = data;
    });
  }
}
