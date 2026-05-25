import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, /// from Angular 19 onwards this not required, by default is true
  templateUrl: './header.html',
  //   styleUrl: './header.css',
})
export class HeaderComponent {}
