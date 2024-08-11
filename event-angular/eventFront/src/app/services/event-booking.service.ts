// services/event-booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
import { Reservation } from '../models/reservation.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllEvents(): Observable<Event[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Event[]>(`${this.baseUrl}/events`, { headers });
  }

  getEventById(id: number): Observable<Event> {
    const headers = this.getAuthHeaders();
    return this.http.get<Event>(`${this.baseUrl}/events/${id}`, { headers });
  }

  searchEvents(category?: string, start?: Date, end?: Date): Observable<Event[]> {
    let url = `${this.baseUrl}/events/search?`;
    if (category) {
      url += `category=${category}&`;
    }
    if (start) {
      url += `start=${start.toISOString().split('T')[0]}&`;
    }
    if (end) {
      url += `end=${end.toISOString().split('T')[0]}&`;
    }
    const headers = this.getAuthHeaders();
    return this.http.get<Event[]>(url, { headers });
  }

  createEvenement(event: Event): Observable<Event> {
    const headers = this.getAuthHeaders();
    return this.http.post<Event>(`${this.baseUrl}/events/addEvent`, event, { headers });
  }

  updateEvent(id: number, event: Event): Observable<Event> {
    const headers = this.getAuthHeaders();
    return this.http.put<Event>(`${this.baseUrl}/events/${id}`, event, { headers });
  }

  deleteEvent(id: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.baseUrl}/events/${id}`, { headers });
  }

  bookEvent(eventId: number, reservation: Reservation): Observable<Reservation> {
    const headers = this.getAuthHeaders();
    return this.http.post<Reservation>(`${this.baseUrl}/events/${eventId}/book`, reservation, { headers });
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    const headers = this.getAuthHeaders();
    return this.http.post<Reservation>(`${this.baseUrl}/reservations`, reservation, { headers });
  }

  getReservationsByUser(userId: number): Observable<Reservation[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations/user/${userId}`, { headers });
  }

  getReservationsByEvent(eventId: number): Observable<Reservation[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations/event/${eventId}`, { headers });
  }

  createContact(contact: Contact): Observable<Contact> {
    const headers = this.getAuthHeaders();
    return this.http.post<Contact>(`${this.baseUrl}/contacts`, contact, { headers });
  }

  getAllContacts(): Observable<Contact[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Contact[]>(`${this.baseUrl}/contacts`, { headers });
  }

}
