import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  templateUrl: './ng-content-example.component.html',
  styleUrls: ['./ng-content-example.component.css']
})
export class NgContentExampleComponent {

  @Input()
  Name: any;

  
}
