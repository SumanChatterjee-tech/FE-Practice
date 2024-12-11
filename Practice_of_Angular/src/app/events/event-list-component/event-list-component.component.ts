import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventServiceService } from 'src/app/service/event-service.service';

@Component({
  selector: 'app-event-list-component',
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.css']
})
export class EventListComponentComponent implements OnInit {
    events: any;
    nameIcon: String ="";
    constructor(private eventService: EventServiceService, private route: Router,
                private activatedRoute: ActivatedRoute
    ){}
  
   ngOnInit(): void {
    this.nameIcon = this.activatedRoute.snapshot.params['username']; //try to implement custom pipe
    console.log(this.nameIcon);
     this.events = this.eventService.getEventsForBasicRouting(); 
  }

    stringCameFromChild: string = "";
    isCollapsed:boolean= true;
    
    handleDataFromChild(data: any){
      this.stringCameFromChild = data;
    }

    toggleCollapse(){
      this.isCollapsed = ! this.isCollapsed;
    }

    createEvent(){
      this.route.navigate(["event/createNew"]);
    }

}
