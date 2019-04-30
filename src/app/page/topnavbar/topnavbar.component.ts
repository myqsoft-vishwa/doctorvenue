import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  public name;
  constructor(private router : Router,private toster: ToastrService) { }
   
  ngOnInit() {
   var userdata = JSON.parse(localStorage.getItem('userdata'));
   this.name=userdata.name;
  }
  logout()
  {
  	localStorage.removeItem('userdata');
  	this.toster.success("Logout successfully");
  	this.router.navigate(['']);
  }

}
