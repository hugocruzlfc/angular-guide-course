import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userId = input.required<'string'>();
  private userService = inject(UsersService);

  ///old version, necessary activate OnInit
  private activatedRoute = inject(ActivatedRoute);
  userNameV1 = '';
  private destroyRef = inject(DestroyRef);
  ////

  userName = computed(
    () => this.userService.users.find((u) => u.id === this.userId())?.name,
  );

  ngOnInit() {
    const subscription = this.activatedRoute.params.subscribe({
      next: (paramMap) => {
        this.userNameV1 =
          this.userService.users.find((u) => u.id === paramMap['userId'])
            ?.name || '';
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
