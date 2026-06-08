import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';
import { ServerStatusComponent } from './features/dashboard/server-status/server-status.component';
import { TrafficComponent } from './features/dashboard/traffic/traffic.component';
import { TicketsComponent } from './features/dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
})
export class AppComponent {}
