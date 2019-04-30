import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
   serverUrl=environment.API_URL;
  constructor(private http: HttpClient) { }
  getLogin(email,password)
  {
  	let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
    return this.http.post < getUser > (this.serverUrl + 'login', {
        "email": email,
        "password": password,
      },
      httpOptions

    );
  }
}
interface getUser
{
	success: string,
    message: string,
     data: any
}
