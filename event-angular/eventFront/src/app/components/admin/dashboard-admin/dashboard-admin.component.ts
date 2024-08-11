import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventBookingService } from "../../../services/event-booking.service";
import { Event } from "../../../models/event.model";
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import {ListEventComponent} from "../list-event/list-event.component";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ListEventComponent
  ],
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventBookingService: EventBookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      capacity: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    const event: Event = this.eventForm.value;
    this.eventBookingService.createEvenement(event).subscribe(
      () => {
        window.location.reload();
      },
      error => {
        console.error('Error creating event', error);
      }
    );
  }
}
