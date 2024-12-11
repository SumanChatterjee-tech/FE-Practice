import {RouterModule, Routes } from "@angular/router";
import { EventListComponentComponent } from "./events/event-list-component/event-list-component.component";
import { NgModule } from "@angular/core";
import { EventroutingdetailsComponent } from "./event-routing-details/eventroutingdetails/eventroutingdetails.component";
import { RouteGuardService } from "./service/route-guard.service";
import { RouteResolverService } from "./service/route-resolver.service";
import { CreateEventComponent } from "./event/create-event/create-event.component";
import { LoginPageComponent } from "./login/login-page/login-page.component";

const routes: Routes=[
    {path: "",  component: LoginPageComponent }, //resolve:{events: RouteResolverService}
    {path:"eventDetails/:username", component: EventListComponentComponent},
    {path: 'events/:eventId', component: EventroutingdetailsComponent, canActivate:[RouteGuardService]},
    {path: 'event/createNew', component: CreateEventComponent},
    {path: "**", component: EventListComponentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}