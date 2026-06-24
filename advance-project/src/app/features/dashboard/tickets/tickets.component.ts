import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketInput } from './ticket-input.moel';
import { TicketComponent } from './ticket/ticket.component';
@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketInput: TicketInput) {
    const ticket: Ticket = {
      title: ticketInput.title,
      request: ticketInput.text,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.push(ticket);
  }
}
