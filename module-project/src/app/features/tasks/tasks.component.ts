import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task.model';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.schema';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get userTasks(): Task[] {
    return this.tasksService.getUserTasks(this.user?.id!);
  }

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(data: NewTaskData) {
    this.tasksService.addTask(data, this.user!.id);
    this.isAddingTask = false;
  }
}
