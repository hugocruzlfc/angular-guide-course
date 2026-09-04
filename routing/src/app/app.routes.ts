import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { resolveUserTasks, TasksComponent } from './tasks/tasks.component';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const canMatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  // only allow access to the user with id 'u1', otherwise redirect to the unauthorized page
  const shouldMatch = segments[0].path === 'users' && segments[1].path === 'u1';
  if (shouldMatch) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No Task Page',
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    canMatch: [canMatchGuard],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', //users/<userId>/tasks
        component: TasksComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new', //users/<userId>/tasks/new
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
      },
    ],
    // data:{} for pass data to the component, like title, etc
    resolve: {
      // parameter to be resolved before the component is loaded, like userName
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
