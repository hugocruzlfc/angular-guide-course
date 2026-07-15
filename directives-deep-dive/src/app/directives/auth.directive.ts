import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from '../auth/auth.model';
import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
