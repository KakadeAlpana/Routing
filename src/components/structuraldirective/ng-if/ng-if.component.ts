import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
   isdiv1visible:boolean = true;
  isboxToggle:boolean=false;

  isdata1:string ='';
  isdata2:string = '';

  ischeckbox :boolean= false;

  isSelectValue :string ="df";

   hideDiv(){
    this.isdiv1visible = false;
   }
   showdiv(){
    this.isdiv1visible = true;
   }
   toggleDiv(){
    this.isboxToggle= !this.isboxToggle
   }
}
