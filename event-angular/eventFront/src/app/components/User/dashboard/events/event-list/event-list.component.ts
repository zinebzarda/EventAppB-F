import { Component, OnInit } from '@angular/core';
import { EventBookingService } from '../../../../../services/event-booking.service';
import { Event } from '../../../../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventBookingService: EventBookingService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventBookingService.getAllEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
      },
      error => {
        console.error('Error fetching events', error);
      }
    );
  }
}
