import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent],
})
export class AppComponent {}
