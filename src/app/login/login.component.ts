import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(private router: Router) { 
   }

  ngOnInit() {
  	 document.body.className = 'hold-transition login-page';
     
  }
  login(e)
  {
    e.preventDefault()
   // handle IE click-through modal bug
   e.stopPropagation()
  	this.router.navigate(['dashboard']);
  }

}
