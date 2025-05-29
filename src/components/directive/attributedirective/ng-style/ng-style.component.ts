import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

   studentArray :any[]=[
  {name:'AAA', markes: 30, city:'pune',isActive:false},
  {name:'bbb', markes: 70,city:'Abad',isActive:false},
  {name:'ggg', markes: 80,city:'Jaiour',isActive:true},
  {name:'fff', markes: 67,city:'Gao',isActive:false},
  {name:'sss', markes: 10,city:'pune',isActive:true}
 ]
}
