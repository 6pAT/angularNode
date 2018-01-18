import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { EventsformComponent } from './components/eventsform/eventsform.component';
import { NewComponentComponent } from './components/new-component/new-component.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsformComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
