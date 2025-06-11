import { Component, inject } from '@angular/core';
import { Router, RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router= inject(Router)
  loggedUserData :any;

  constructor() {
  const loggedData = localStorage.getItem('loginData');
  this.loggedUserData = loggedData
  console.log(loggedData)
  // if(loggedData != null){
    
  // } 
  }
  
  onLogout(){
    localStorage.removeItem('loginData')
     this.router.navigateByUrl('/login')
  }
}
