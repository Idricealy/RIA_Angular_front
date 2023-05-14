import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Filiere} from "../../../../../../model/Filiere";
import {AdminService} from "../../../../../../services/admin/admin.service";

@Component({
  selector: 'app-modal-add-filiere',
  templateUrl: './modal-add-filiere.component.html',
  styleUrls: ['./modal-add-filiere.component.css']
})
export class ModalAddFiliereComponent implements OnInit{
  @Input() edit: boolean = false;
  @Input() filieres: Filiere | undefined;
  id : string = '';

  nom_filiere : string = '';
  description : string = '';
  niveau : string = '';
  nb_annees : number = 0;
  responsable_filiere : string = '';
  contact_responsable : string = '';
  role_responsable : string = '';



  constructor(
    public activeModal: NgbActiveModal,
    private adminService : AdminService) {
  }
  ngOnInit(): void {
    if(this.filieres) {
      this.nom_filiere = this.filieres.nom_filiere;
      this.description = this.filieres.description;
      this.niveau = this.filieres.niveau;
      this.nb_annees = this.filieres.nb_annees;
      this.responsable_filiere = this.filieres.responsable_filiere;
      this.contact_responsable = this.filieres.contact_responsable;
      this.role_responsable = this.filieres.role_responsable
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
      nombre_annee : this.nb_annees,
      email_responsable : this.contact_responsable,
    }

    if(
      this.nom_filiere === '' ||
      this.description === '' ||
      this.niveau === '' ||
      !this.nb_annees ||
      this.contact_responsable === '' ) {
      alert("Veuillez remplir le formulaire !")
    }else {
      this.adminService.newFiliere(data)
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
      nom_filiere : this.nom_filiere,
      description : this.description,
      nombre_annee : this.nb_annees,
      email_responsable : this.contact_responsable,
    }


    if(this.nom_filiere === '' ||
      this.description === '' ||
      this.niveau === '' ||
      this.contact_responsable === '') {
      alert("Veuillez remplir le formulaire !")
    }else {
      this.adminService.updateFiliere(this.filieres?.id, data)
        .subscribe((response) => {
          if(response.success) {
            location.reload()
          }else {
            alert('Erreur lors de la modification dune filiere');
          }
        })
    }
  }
}
