import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-comp',
  imports: [],
  templateUrl: './button-comp.component.html',
  styleUrl: './button-comp.component.css'
})
export class ButtonCompComponent {
@Input() btnText :string ='';
@Input() btnClass :string=''

@Output() btnClick =new EventEmitter<string>


onclick(){
  debugger
 this.btnClick.emit()
}
}