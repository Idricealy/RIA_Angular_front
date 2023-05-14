import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StudentService} from "../../../../../services/student/student.service";

@Component({
  selector: 'app-cours-student',
  templateUrl: './cours-student.component.html',
  styleUrls: ['./cours-student.component.css']
})
export class CoursStudentComponent implements OnInit{
  notes : any = []

  constructor(
    private studentService : StudentService) {
  }

  ngOnInit(): void {
    this.studentService.getNotes()
      .subscribe((response) =>{
        if(response.data){
          this.notes = response.data
        }
      })
  }

  noteTest(note : any) {
    return typeof note.note === 'number'
  }

}
