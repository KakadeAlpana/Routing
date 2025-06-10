import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-view-child',
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent  implements AfterViewInit{

 @ViewChild('txt') textBox?:ElementRef;
 @ViewChild('AlertComponent') alterD?:AlertComponent;

 ngAfterViewInit(): void {
  const value = this.textBox?.nativeElement.value
  console.log(value);

  const alterValue = this.alterD?.alertMode;
  console.log(alterValue);

}

}
