import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.css']
})
export class AsidenavbarComponent implements OnInit {
  public name;
  constructor() { }

  ngOnInit() {
  	 var userdata = JSON.parse(localStorage.getItem('userdata'));
     this.name=userdata.name;
  }

}
