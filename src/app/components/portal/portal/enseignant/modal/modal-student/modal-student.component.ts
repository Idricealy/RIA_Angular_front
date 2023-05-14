import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {EnseignantService} from "../../../../../../services/enseignant/enseignant.service";
import {StudentList} from "../../../../../../model/StudentList";

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.css']
})
export class ModalStudentComponent implements OnInit{
  @Input() courseId: number | undefined;
  students: StudentList[] = [];

  studentNotes: { [studentId: string]: number } = {};

  notes : number = 0;
  constructor(
    public activeModal: NgbActiveModal,
    private enseignantService : EnseignantService
  ) {}

  closeModal() {
    this.activeModal.close();
  }
  initializeStudentNotes() {
    this.students.forEach((student) => {
      this.studentNotes[student.id] = 0;
    });
  }
  ngOnInit(): void {
    this.initializeStudentNotes();

    this.enseignantService.getStudentPerCourse(this.courseId)
      .subscribe((response) => {
        if(!response.message) {
          // @ts-ignore
          this.students = Object.values(response)[0]
        }

      })
  }

  addNoteToStudent(student : any) {
    const note = this.studentNotes[student.id];

    const data = {
      note: note
    }

    this.enseignantService.addNoteToStudent(this.courseId, student.id , data)
      .subscribe((response) => {
        if(response.success) {
          alert(response.success)
        }else {
          alert(response.message)
        }
      })
  }


}
