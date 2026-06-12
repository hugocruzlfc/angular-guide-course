import {
  Component,
  ElementRef,
  Host,
  HostBinding,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  label = input.required<string>();
  inputId = input<string>();
  // @HostBinding('class') className = 'control'; no se recomienda, solo sigue existiendo por compatibilidad con versiones anteriores, se recomienda usar host: { class: 'control' } en el decorador @Component

  private el = inject(ElementRef);

  onClick() {
    console.log(this.el.nativeElement);
  }
}
