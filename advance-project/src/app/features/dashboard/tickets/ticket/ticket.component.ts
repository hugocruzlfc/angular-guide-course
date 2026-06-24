import { Component, input, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailVisible = signal<boolean>(false);

  onToggleDetails() {
    //this.detailVisible.set(!this.detailVisible());
    this.detailVisible.update((wasVisible) => !wasVisible);
  }
}
