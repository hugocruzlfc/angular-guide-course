import { ControlComponent } from '@/app/shared/control/control.component';
import { ButtonComponent } from '@/app/shared/ui/button/button.component';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideSendHorizontal } from '@lucide/angular';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    LucideSendHorizontal,
    ControlComponent,
    FormsModule,
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;  old version

  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  // form: HTMLFormElement could be pass via template reference
  onSubmit(titleInput: string, requestInput: string) {
    console.log(titleInput);
    console.log(requestInput);

    // this.form?.nativeElement.reset();

    this.form()?.nativeElement.reset(); // new version
  }
}
