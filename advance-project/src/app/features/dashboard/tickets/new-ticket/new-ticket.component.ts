import { ControlComponent } from '@/app/shared/control/control.component';
import { ButtonComponent } from '@/app/shared/ui/button/button.component';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideSendHorizontal } from '@lucide/angular';
import { TicketInput } from '../ticket-input.moel';

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
export class NewTicketComponent implements AfterViewInit, OnInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;  old version
  add = output<TicketInput>();

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('NewTicketComponent ngOnInit');
    console.log(this.form()?.nativeElement);
    // con @ViewChild aqui seria undefined
  }

  ngAfterViewInit(): void {
    console.log('NewTicketComponent ngAfterViewInit');
    console.log(this.form()?.nativeElement);
  }

  // form: HTMLFormElement could be pass via template reference
  onSubmit(titleInput: string, requestInput: string) {
    // console.log(titleInput);
    // console.log(requestInput);

    this.add.emit({
      title: titleInput,
      text: requestInput,
    });

    // this.form?.nativeElement.reset();

    this.form()?.nativeElement.reset(); // new version
  }
}
