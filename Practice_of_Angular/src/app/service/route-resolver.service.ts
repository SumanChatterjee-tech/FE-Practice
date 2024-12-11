import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventServiceService } from './event-service.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService implements Resolve<any>{

  constructor(private eventService: EventServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
     return this.eventService.getEvents().pipe(map((events: any)=>events));
  }
}
