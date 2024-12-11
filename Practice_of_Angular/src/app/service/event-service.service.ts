import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor() { }
  events: any = [ {name:'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Rd', city: 'London', country: 'England'}},
    {name:'ng-nl', date: '4/15/2037', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
    {name:'ng-conf 2037', date: '4/15/2037', time: '9am', location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'}},
    {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},];
  
    getEvents(): Subject<any>{
        let subject = new Subject();
        setTimeout(()=>{
            subject.next(this.events);
        },300);
        return subject;
    }

    saveEvent(event: Object){
      this.events.push(event);
    }

    getEventsForBasicRouting(){
      return this.events;
    }
}
