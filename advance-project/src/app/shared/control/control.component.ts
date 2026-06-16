import {
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
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
  @ContentChild('input') private control!: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >; //cuando se usa la plantilla ng-content, se puede usar @ContentChild para obtener una referencia a un elemento hijo que se proyecta en el componente. En este caso, se está buscando un elemento con la referencia local 'input' que se proyecta en el componente ControlComponent. El tipo de control es ElementRef<HTMLInputElement | HTMLTextAreaElement>, lo que significa que puede ser un elemento de entrada o un área de texto.

  private controlFn =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); // modern variant

  constructor() {
    afterRender(() => {
      console.log('ControlComponent afterRender');
      console.log(this.controlFn());
    });

    afterNextRender(() => {
      console.log('ControlComponent afterNextRender');
      console.log(this.controlFn());
    });
  }

  @HostListener('click')
  onClick() {
    console.log('Clicked on control component');
    console.log(this.el.nativeElement);
    console.log(this.control);
    console.log(this.controlFn());
  }
}
