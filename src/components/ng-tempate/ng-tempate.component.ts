import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-tempate',
  imports: [CommonModule],
  templateUrl: './ng-tempate.component.html',
  styleUrl: './ng-tempate.component.css'
})
export class NgTempateComponent {
 isUserLoggiged :boolean =true;
 logginguserName :string ='Alpana'

}
