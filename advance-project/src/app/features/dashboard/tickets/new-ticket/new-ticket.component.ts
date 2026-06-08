import { ButtonComponent } from '@/app/shared/ui/button/button.component';
import { Component } from '@angular/core';
import { LucideSendHorizontal } from '@lucide/angular';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, LucideSendHorizontal],
  templateUrl: './new-ticket.component.html',
})
export class NewTicketComponent {}
