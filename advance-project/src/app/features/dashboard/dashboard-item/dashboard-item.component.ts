import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
})
export class DashboardItemComponent {
  @Input({ required: true }) image!: {
    src: string;
    alt: string;
  }; // traditional way

  title = input.required<string>(); // new way with the input function
}
