import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit{
  portal : string = '';

  constructor(private router: Router  ) {}
  ngOnInit(): void {
    if(window.localStorage.getItem('user') !== null) {

      if(window.localStorage.getItem('role') == 'admin') {
        this.portal = 'directeur'
      } else {
        // @ts-ignore
        this.portal = window.localStorage.getItem('user');
      }

    } else {
      this.router.navigate([`/`]);
    }
    console.log(this.portal)
  }

}
