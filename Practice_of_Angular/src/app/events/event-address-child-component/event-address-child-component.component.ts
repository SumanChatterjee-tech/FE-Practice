import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-address-child-component',
  templateUrl: './event-address-child-component.component.html',
  styleUrls: ['./event-address-child-component.component.css']
})
export class EventAddressChildComponentComponent {

  @Output()
  sendEventBackToParent = new EventEmitter();

  @Input() 
  address:any;



  handleClick(){
    console.log("hi");
    this.sendEventBackToParent.emit("The address sent from child is-->"+this.address.city);
  }


}
