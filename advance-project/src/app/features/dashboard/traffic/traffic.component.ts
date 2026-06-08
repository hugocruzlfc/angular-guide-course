import { TRAFFIC_DATA } from '@/app/shared/constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  trafficData = TRAFFIC_DATA;
  maxTraffic = Math.max(...this.trafficData.map((data) => data.value));
}
