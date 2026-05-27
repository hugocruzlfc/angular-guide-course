import { Component, Input } from '@angular/core';
import { TaskComponent } from './task.component';
import { TASKS } from '@/app/shared/constants';
import { Task } from './task.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  tasks: Task[] = TASKS;

  get userTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }
}
