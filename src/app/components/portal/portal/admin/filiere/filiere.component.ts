import {Component, OnInit} from '@angular/core';
import {Filiere} from "../../../../../model/Filiere";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdminService} from "../../../../../services/admin/admin.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ModalAddFiliereComponent} from "../modal/modal-add-filiere/modal-add-filiere.component";

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
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
  ],
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit{
  protected filieres: Filiere[] = [];

  constructor(
    private adminService : AdminService,
    private modalService: NgbModal) {
  }

  onEdit(filiere: Filiere) {
    const modalEdit = this.modalService.open(ModalAddFiliereComponent)
    modalEdit.componentInstance.filieres = filiere;
    modalEdit.componentInstance.edit = true;
  }

  ngOnInit(): void {
    this.adminService.getAllFiliere()
      .subscribe((response) => {
        this.filieres = response.filieres
      })
  }

  addNewFiliere() {
    this.modalService.open(ModalAddFiliereComponent)
  }

  onDelete(filiere : Filiere) {
    this.adminService.deleteFiliere(filiere.id)
      .subscribe((response ) => {
        if(response.message = 'deleted successfully !') {
          alert("La filière a bien été supprimée")
          location.reload()
        } else{
          alert("Problème lors de la suppresion de la filière")
        }
      })
  }
}
