import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AdminService} from "../../../../../../services/admin/admin.service";
import {Ue} from "../../../../../../model/Ue";

@Component({
  selector: 'app-modal-add-ue',
  templateUrl: './modal-add-ue.component.html',
  styleUrls: ['./modal-add-ue.component.css']
})
export class ModalAddUeComponent {
  @Input() edit: boolean = false;
  @Input() ues: Ue | undefined;
  id : string = '';

  nom_filiere : string = '';
  nom_ue : string = '';
  description : string = '';
  niveau : string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private adminService : AdminService) {
  }
  ngOnInit(): void {
    console.log(this.ues)
    if(this.ues) {
      this.nom_filiere = this.ues.filiere;
      this.description = this.ues.description;
      this.niveau = this.ues.niveau;
      this.nom_ue = this.ues.nom_ue;
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  onSubmit() {
    const data = {
      nom_filiere : this.nom_filiere,
      description : this.description,
      niveau : this.niveau,
      nom_ue : this.nom_ue,

    }

    if(
      this.nom_filiere === '' ||
      this.description === '' ||
      this.niveau === '' ||
      this.nom_ue === '') {
      alert("Veuillez remplir le formulaire !")
    }else {
      this.adminService.newUe(data)
        .subscribe((response) => {
          if(response.success) {
            location.reload()
          }else {
            alert('Erreur lors de la saisie dun nouvel Ue');
          }
        })
    }
  }

  onEdit() {
    const data = {
      nom : this.nom_ue,
      description : this.description
    }

    if(this.nom_ue === '' ||
      this.description === '') {
      alert("Veuillez remplir le formulaire !")
    }else {
      console.log(data)
      this.adminService.updateUe(this.ues?.id, data)
        .subscribe((response) => {
          if(response.success) {
            location.reload()
          }else {
            alert('Erreur lors de la modification dun ue');
          }
        })
    }
  }
}
