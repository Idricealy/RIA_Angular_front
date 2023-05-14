import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Ue} from "../../../../../model/Ue";
import {AdminService} from "../../../../../services/admin/admin.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalAddFiliereComponent} from "../modal/modal-add-filiere/modal-add-filiere.component";
import {Filiere} from "../../../../../model/Filiere";
import {ModalAddUeComponent} from "../modal/modal-add-ue/modal-add-ue.component";

@Component({
  selector: 'app-ue',
  templateUrl: './ue.component.html',
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
  styleUrls: ['./ue.component.css']
})
export class UeComponent {
  protected ues: Ue[] = [];

  constructor(
    private adminService : AdminService,
    private modalService: NgbModal) {
  }

  onEdit(ue: Ue) {
    const modalEdit = this.modalService.open(ModalAddUeComponent)
    modalEdit.componentInstance.ues = ue;
    modalEdit.componentInstance.edit = true;
  }

  ngOnInit(): void {
    this.adminService.getAllUes()
      .subscribe((response) => {
        this.ues = response.data
      })
  }

  addNewUe() {
    this.modalService.open(ModalAddUeComponent)
  }

  onDelete(ue : Ue) {
    this.adminService.deleteUe(ue.id)
      .subscribe((response ) => {
        if(response.message = 'deleted successfully !') {
          alert("L'Ue a bien été supprimée")
          location.reload()
        } else{
          alert("Problème lors de la suppresion de l'Ue")
        }
      })
  }
}
