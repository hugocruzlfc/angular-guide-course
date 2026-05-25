import { Component } from '@angular/core';
import { HeaderComponent } from '@/app/features/header/header';
import { UserComponent } from './features/user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
