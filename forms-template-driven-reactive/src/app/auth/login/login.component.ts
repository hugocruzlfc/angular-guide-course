import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private form = viewChild<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');

      if (savedForm) {
        const loaderFormData = JSON.parse(savedForm);
        const savedEmail = loaderFormData.email;

        setTimeout(() => {
          this.form()?.controls['email'].setValue(savedEmail);
        }, 1);
      }

      const subscription = this.form()
        ?.valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) => {
            console.log(value);
            window.localStorage.setItem(
              'saved-login-form',
              JSON.stringify({
                email: value.email,
              }),
            );
          },
        });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;

    const { email, password } = formData.form.value;

    console.log(email);
    console.log(password);

    formData.form.reset();
  }
}
