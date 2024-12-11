import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/service/event-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  constructor(private route: Router, private eventService: EventServiceService){}

  submit(form: NgForm){
    this.eventService.saveEvent(form.value);
    this.route.navigate([""]);
  }
  cancel(){
    this.route.navigate([""]);
  }
}
