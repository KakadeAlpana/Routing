import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { GetapiCallService } from '../../otherservice/services/getapi-call.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)
  loggedUserData: any;

  userRole: string = ''
  constructor(private getapiSer: GetapiCallService) {
    const loggedData = localStorage.getItem('loginData');
    this.loggedUserData = loggedData
    console.log(loggedData)
    // if(loggedData != null){

    // } 
  }

  onLogout() {
    localStorage.removeItem('loginData')
    this.router.navigateByUrl('/login')
  }

  roleChange(role: string) {
    debugger
    this.getapiSer.RoleChange$.next(role);
    this.getapiSer.NewRole$.subscribe((res: string) => {
      this.userRole = res
      console.log(this.userRole)
    })
  }
}
