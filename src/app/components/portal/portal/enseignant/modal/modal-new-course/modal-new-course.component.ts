import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {EnseignantService} from "../../../../../../services/enseignant/enseignant.service";
import {Courses} from "../../../../../../model/Courses";

@Component({
  selector: 'app-modal-new-course',
  templateUrl: './modal-new-course.component.html',
  styleUrls: ['./modal-new-course.component.css']
})
export class ModalNewCourseComponent implements OnInit{
  @Input() edit: boolean = false;
  @Input() course: Courses | undefined;
  nom : string = '';

  nom_ue : string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private enseignantService : EnseignantService) {
  }
  ngOnInit(): void {
    if(this.course) {
      this.nom = this.course.nom_cours;
      this.nom_ue = this.course.unite_enseignement;
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  onSubmit() {
    const data = {
      nom: this.nom,
      nom_ue: this.nom_ue,
    }

    if( this.nom === '' || this.nom_ue === '') {
      alert("Veuillez remplir le formulaire !")
    }else {
      this.enseignantService.postCourse(data)
        .subscribe((response) => {
          if(response.success) {
            location.reload()
          }else {
            alert('Erreur lors de la saisie dun nouveau cours');
          }
        })
    }
  }

  onEdit() {
    const data = {
      nomCours: this.nom,
      nomUe: this.nom_ue,
    }

    if( this.nom === '') {
      alert("Veuillez remplir le formulaire !")
    }else {
      this.enseignantService.updateCourse(this.course?.id_cours, data)
        .subscribe((response) => {
          if(response.success) {
            location.reload()
          }else {
            alert('Erreur lors de la modification dun cours');
          }
        })
    }
  }
}
