import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponentComponent } from './events/event-list-component/event-list-component.component';
import { EventAddressChildComponentComponent } from './events/event-address-child-component/event-address-child-component.component';
import { AppRouterModule } from './app-routiong.module';
import { EventroutingdetailsComponent } from './event-routing-details/eventroutingdetails/eventroutingdetails.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { NgContentExampleComponent } from './eventLogout/ng-content-example/ng-content-example.component';
import { ShortenPipe } from './pipe/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponentComponent,
    EventAddressChildComponentComponent,
    EventroutingdetailsComponent,
    CreateEventComponent,
    LoginPageComponent,
    NgContentExampleComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule, AppRouterModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
