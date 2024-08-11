import { Component, OnInit } from '@angular/core';
import { EventBookingService } from '../../../../../services/event-booking.service';
import { Reservation } from '../../../../../models/reservation.model';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private eventBookingService: EventBookingService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    // Replace with the actual user ID or event ID as needed
    const userId = 9; // Example user ID
    this.eventBookingService.getReservationsByUser(userId).subscribe(
      (data: Reservation[]) => {
        this.reservations = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load reservations. Please try again later.';
        this.isLoading = false;
      }
    );
  }
}
