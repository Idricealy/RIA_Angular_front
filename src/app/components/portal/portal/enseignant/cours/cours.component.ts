import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Courses} from "../../../../../model/Courses";
import {EnseignantService} from "../../../../../services/enseignant/enseignant.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalStudentComponent} from "../modal/modal-student/modal-student.component";
import {ModalNewCourseComponent} from "../modal/modal-new-course/modal-new-course.component";
import {HttpResponse} from "@angular/common/http";
import {ModalAddStudentComponent} from "../modal/modal-add-student/modal-add-student.component";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
  animations: [
    trigger('collapseAnimation', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
        visibility: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        overflow: 'visible',
        visibility: 'visible'
      })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class CoursComponent implements OnInit{
  protected courses: Courses[] = [];

  constructor(
    private enseignantService : EnseignantService,
    private modalService: NgbModal) {
  }

  showStudent(course : Courses) {
    const modalStudent = this.modalService.open(ModalStudentComponent)
    modalStudent.componentInstance.courseId = course.id_cours;
  }

  showAddStudentInCourse(course : Courses) {
    const modalAddStudentInCourse = this.modalService.open(ModalAddStudentComponent)
    modalAddStudentInCourse.componentInstance.course = course;
  }
  ngOnInit(): void {
    this.enseignantService.getAllCoursesByEnseignant()
      .subscribe((response) => {
        this.courses = response.mesCours
      })

    this.courses.map((course) => course.isCollapsed = false)

  }

  addNewCourse() {
    this.modalService.open(ModalNewCourseComponent)
  }

  onEdit(course: Courses) {
    const modalEdit = this.modalService.open(ModalNewCourseComponent)
    modalEdit.componentInstance.course = course;
    modalEdit.componentInstance.edit = true;
  }

  onDelete(course: Courses) {
    this.enseignantService.deleteCourse(course.id_cours)
      .subscribe((response ) => {
        if(response.message = 'deleted successfully !') {
          alert("Le cours a bien été supprimé")
          location.reload()
        } else{
          alert("Problème lors de la suppresion du cours")
        }
      })
  }



}
