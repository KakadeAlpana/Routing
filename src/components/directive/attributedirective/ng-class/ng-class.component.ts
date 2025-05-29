import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
 circleColordiv1 :string='bg-primary';
iscircleColordiv2:boolean = false;

 num1 :string = '1';
 num2:string ='1';

 isCheckbockActive :boolean =false;

 addRedColor(){
this.circleColordiv1 = "bg-danger"
 }

 addGreenColor(){
this.circleColordiv1 ='bg-success'
 }
 toggleColor(){
this.iscircleColordiv2 = !this.iscircleColordiv2
 }

 
}
