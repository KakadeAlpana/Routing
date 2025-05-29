import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
 cityArray :string[] =["pune","mumbai",'jaipur','abad']

 studentArray :any[]=[
  {sid:101,name:'AAA',city:'pune',isActive:false},
  {sid:102,name:'bbb',city:'Abad',isActive:false},
  {sid:103,name:'ggg',city:'Jaiour',isActive:true},
  {sid:104,name:'fff',city:'Gao',isActive:false},
  {sid:105,name:'sss',city:'pune',isActive:true}
 ]
}
