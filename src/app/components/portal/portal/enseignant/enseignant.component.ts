import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  selectedTab: string | undefined;
  ngOnInit(): void {
  }

  constructor() {
  }

  onClick(tab : String) {
    // @ts-ignore
    this.selectedTab = tab
    console.log(this.selectedTab);
  }

  logout() {

  }

}
