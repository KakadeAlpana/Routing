import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GetapiCallService } from '../../../otherservice/services/getapi-call.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginData:any={
     username:'',
     password:''
  }
  router= inject(Router);

  http=inject(HttpClient)
  username: any;
  password: any;
apiurl='http://localhost:4201/login';
  constructor(private api:GetapiCallService){

  }
  onSubmit(form:NgForm){
    if(this.loginData.username == 'alpana' && this.loginData.password == '1234'){
      localStorage.setItem('loginData',this.loginData.username)
      alert("login success");
      this.router.navigateByUrl("/data-binding");
    }else{
      alert("Sory No login !")
    }
  }
//   loginUser() {
//   const data = { username: this.username, password: this.password };
// this.http.post('http://localhost:4200/login', data)
//   .subscribe({
//     next: res => console.log(res),
//     error: err => console.error(err)
//   });

}
