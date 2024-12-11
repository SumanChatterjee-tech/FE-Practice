import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventServiceService } from 'src/app/service/event-service.service';

@Component({
  selector: 'app-eventroutingdetails',
  templateUrl: './eventroutingdetails.component.html',
  styleUrls: ['./eventroutingdetails.component.css']
})
export class EventroutingdetailsComponent implements OnInit{
event: any={name:'', date:'', time:'', location: {address:'', city:'', country:''}};

constructor(private activateRouter: ActivatedRoute, private eventService: EventServiceService,
            private router: Router
){}
ngOnInit(): void {
  this.activateRouter.params.subscribe(data=>{
    this.mapWithEvent(data);
  });
}

mapWithEvent(name: any){
  this.eventService.getEventsForBasicRouting().forEach((element: any) => {
     if(element.hasOwnProperty('name') && element.name===name.eventId){
      console.log(element);
        this.event['name'] = element.name;
        this.event['date'] = element.date;
        this.event['time'] = element.time;
        if(element.location != null){
          this.event["location"]['address'] = element.location.address;
          this.event['location']['city'] = element.location.city;
          this.event['location']['country'] = element.location.country;
        }
     }
  });
}

}
