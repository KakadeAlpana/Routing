import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-else-if',
  imports: [FormsModule],
  templateUrl: './else-if.component.html',
  styleUrl: './else-if.component.css'
})
export class ElseIfComponent {

  isBoxvisible: boolean = false;

  isdiv2togglevisible: boolean = false;
  isdata1 :string ='';
  isdata2 :string ='';

  isSelectStatus :string =''

  hideDiv() {
    this.isBoxvisible = false;
  }

  showdiv() {
    this.isBoxvisible = true;
  }

  toggleDiv() {
    this.isdiv2togglevisible = !this.isdiv2togglevisible
  }
}
