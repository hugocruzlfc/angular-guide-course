import { Component, computed, inject, input, Signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ResolveFn, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<'string'>();
  order = input<'asc' | 'desc'>('asc');
  userTasks = input.required<Task[]>();

  // get tasks from the service and filter by userId and order
  // private tasksService = inject(TasksService);

  // userTasks: Signal<Task[]> = computed(() =>
  //   this.tasksService
  //     .allTasks()
  //     .filter((t) => t.userId === this.userId())
  //     .sort((a, b) => {
  //       if (this.order() === 'desc') {
  //         return a.id > b.id ? -1 : 1;
  //       } else {
  //         return a.id > b.id ? 1 : -1;
  //       }
  //     }),
  // );

  /// other way for get de query params through observable
  // private activatedRoute = inject(ActivatedRoute);
  // destroyRef = inject(DestroyRef);

  // ngOnInit() {
  //   const subscription = this.activatedRoute;.queryParams.subscribe({
  //     next: (params) => (this.order = params['order']),
  //   })

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState,
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'),
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};
