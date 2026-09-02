import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userName = input.required<string>();

  /// with modern version
  //userId = input.required<'string'>();
  // private userService = inject(UsersService);

  // userName = computed(
  //   () => this.userService.users.find((u) => u.id === this.userId())?.name,
  // );
  ////////////////////

  ///old version, necessary activate OnInit
  // private activatedRoute = inject(ActivatedRoute);
  // userNameV1 = '';
  // private destroyRef = inject(DestroyRef);

  // ngOnInit() {
  //   const subscription = this.activatedRoute.params.subscribe({
  //     next: (paramMap) => {
  //       this.userNameV1 =
  //         this.userService.users.find((u) => u.id === paramMap['userId'])
  //           ?.name || '';
  //     },
  //   });

  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
}

/// with fancy router resolver variant
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot,
) => {
  const userService = inject(UsersService);

  const userName =
    userService.users.find((u) => u.id === activatedRoute.params['userId'])
      ?.name || '';

  return userName;
};
