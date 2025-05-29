import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch-control',
  imports: [FormsModule],
  templateUrl: './for-switch-control.component.html',
  styleUrl: './for-switch-control.component.css'
})
export class ForSwitchControlComponent {
   weekDays:string='';

 cityArray :string[] =["pune","mumbai",'jaipur','abad']

 studentArray :any[]=[
  {sid:101,name:'AAA',city:'pune',isActive:false},
  {sid:102,name:'bbb',city:'Abad',isActive:false},
  {sid:103,name:'ggg',city:'Jaiour',isActive:true},
  {sid:104,name:'fff',city:'Gao',isActive:false},
  {sid:105,name:'sss',city:'pune',isActive:true}
 ]
}
