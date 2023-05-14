import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  selectedTab: string | undefined;
  userName : string | undefined ;
  ngOnInit(): void {
    // @ts-ignore
    this.userName = localStorage.getItem("fullName")
    this.selectedTab = 'cours'
  }

  constructor() {
  }

  onClick(tab : String) {
    // @ts-ignore
    this.selectedTab = tab
  }

}
