import {Component, OnInit} from '@angular/core';
import {Event} from "../../../models/event.model";
import {EventBookingService} from "../../../services/event-booking.service";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    DatePipe
  ],
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
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


  deleteEvent(id: number): void {
    this.eventBookingService.deleteEvent(id).subscribe(
      () => {
        window.location.reload();
      },
    );
  }

}
