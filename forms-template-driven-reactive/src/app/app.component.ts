import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { ReactLoginComponent } from './auth/react-form/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent, ReactLoginComponent, SignupComponent],
})
export class AppComponent {}
