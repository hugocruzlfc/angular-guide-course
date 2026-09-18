import { Routes } from '@angular/router';

import {
  NewTaskComponent,
  canLeaveEditPage,
} from '../tasks/new-task/new-task.component';
import { resolveUserTasks } from '../tasks/tasks.resolvers';
import { TasksService } from '../tasks/tasks.service';
import { TasksComponent } from '../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        // loadComponent: () =>.  not ne cessary because we are using loadChildren
        //   import('../tasks/tasks.component').then((m) => m.TasksComponent),
        component: TasksComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },
];
