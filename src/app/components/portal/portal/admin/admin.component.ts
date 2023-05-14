import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  selectedTab: string | undefined;
  userName : string | undefined ;
  ngOnInit(): void {
    // @ts-ignore
    this.userName = localStorage.getItem("fullName")
    this.selectedTab = 'edt'
  }

  constructor() {
  }

  onClick(tab : String) {
    // @ts-ignore
    this.selectedTab = tab
  }
}
