import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginser: LoginService, private toastr: ToastrService) {}

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
    var userdata = JSON.parse(localStorage.getItem('userdata'));
    if (userdata) {
      this.router.navigate(['dashboard']);
    }
  }
  login(event) {

    event.preventDefault();
    const target = event.target;
    const email = target.querySelector("#email").value;
    const password = target.querySelector("#passwords").value;
    this.loginser.getLogin(email, password).subscribe(data => {
      if (data.success) {
        localStorage.setItem('userdata', JSON.stringify(data.data));
        this.router.navigate(['dashboard']);
      } else {
        this.toastr.error(data.message);
      }
    });
  }

}
