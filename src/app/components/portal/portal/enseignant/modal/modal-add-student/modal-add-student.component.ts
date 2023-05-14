import {Component, Input, OnInit} from '@angular/core';
import {Courses} from "../../../../../../model/Courses";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {EnseignantService} from "../../../../../../services/enseignant/enseignant.service";
import {StudentService} from "../../../../../../services/student/student.service";
import {StudentList} from "../../../../../../model/StudentList";

@Component({
  selector: 'app-modal-add-student',
  templateUrl: './modal-add-student.component.html',
  styleUrls: ['./modal-add-student.component.css']
})
export class ModalAddStudentComponent implements OnInit{
  @Input() course: Courses | undefined;

  students : Array<any> = []

  constructor(
    public activeModal: NgbActiveModal,
    private enseignantService : EnseignantService,
    private studentService : StudentService) {
  }

  ngOnInit() {
    this.studentService.getAllStudent()
      .subscribe((response) => {
        response.students.map(
          (student: StudentList) =>
            student.filiere === this.course?.filiere
              ?
              this.students.push(student)
              :
              null
        )
      })
  }

  closeModal() {
    this.activeModal.close();
  }

  addStudentInCourse(student : any) {
    const splitName = student.full_Name.split(' ')

    const data = {
      nom_eleve: splitName[0],
      prenom_eleve: splitName[1],
      email: student.contact
    }

    this.enseignantService.addStudentInCourse(this.course?.id_cours, data)
      .subscribe((response) => {
        if(response.success) {
          alert(response.success)
        }else {
          alert(response.message)
        }
      })
  }
}
