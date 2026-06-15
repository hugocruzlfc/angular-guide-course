import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

type ServerStatus = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: ServerStatus = 'online';
  private intervalId?: ReturnType<typeof setInterval>;

  // private destroyRef = inject(DestroyRef); for modern version

  constructor() {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const randomValue = Math.random(); // 0 -0.99999

      if (randomValue < 0.5) {
        this.currentStatus = 'online';
      } else if (randomValue <= 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    // this.destroyRef.onDestroy(() => {
    //   if (this.intervalId) {
    //     clearInterval(this.intervalId);
    //   }
    // });
  }

  ngAfterViewInit(): void {
    console.log('ServerStatusComponent view initialized');
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
