import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  userName : string | undefined ;
  selectedTab: string | undefined;
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
