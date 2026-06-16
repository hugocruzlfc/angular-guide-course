import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
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
  currentStatus = signal<ServerStatus>('online');
  private intervalId?: ReturnType<typeof setInterval>;

  // private destroyRef = inject(DestroyRef); for modern version

  constructor() {
    // permite ejecutar codigo cuando los valores de signal cambian
    effect(() => {
      console.log('Current server status:', this.currentStatus());
    });
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const randomValue = Math.random(); // 0 -0.99999

      if (randomValue < 0.5) {
        this.currentStatus.set('online');
      } else if (randomValue <= 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
