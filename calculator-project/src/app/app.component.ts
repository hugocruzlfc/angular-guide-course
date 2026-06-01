import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';
import { UserInputComponent } from './features/user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {}
