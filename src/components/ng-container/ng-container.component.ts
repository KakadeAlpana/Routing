import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {


  http = inject(HttpClient);
  userList:any[]=[];
  isAPi:boolean =false;


  getUser(){
        this.isAPi =true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList =res;
          this.isAPi =false;

    })
  }

}
