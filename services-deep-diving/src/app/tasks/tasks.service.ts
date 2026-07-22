import { Inject, inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService, LoggingServiceToken } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  readonly tasks$ = this.tasks.asReadonly();
  // private loggingService = inject(LoggingService);

  constructor(
    @Inject(LoggingServiceToken) private loggingService: LoggingService,
  ) {}

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
    this.loggingService.log(`Task added: ${newTask.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
    this.loggingService.log(`Task status updated: ${taskId} to ${newStatus}`);
  }
}
