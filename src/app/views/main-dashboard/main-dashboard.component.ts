import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  //

  public isMenuOpen: boolean = false;

  //

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  //
  
  constructor() { }

  ngOnInit(): void {
  }

}
