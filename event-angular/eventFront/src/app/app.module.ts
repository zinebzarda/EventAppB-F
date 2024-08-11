import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/User/dashboard/dashboard.component';
import { EventListComponent } from './components/User/dashboard/events/event-list/event-list.component';
import { ReservationListComponent } from './components/User/dashboard/reservations/reservation-list/reservation-list.component';
import { EventSearchComponent } from './components/User/dashboard/search/event-search/event-search.component';
import { HeaderComponent } from './components/User/dashboard/layout/header/header.component';
import { FooterComponent } from './components/User/dashboard/layout/footer/footer.component';
import { ContactComponent } from './components/User/dashboard/contact/contact.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ListContactComponent } from './components/admin/list-contact/list-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EventListComponent,
    ReservationListComponent,
    EventSearchComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LogoutComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RegisterComponent
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
