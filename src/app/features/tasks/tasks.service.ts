import { TASKS } from '@/app/shared/constants';
import { Task } from './task.model';
import { NewTaskData } from './new-task/new-task.schema';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = TASKS;

  constructor() {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.tasks.unshift(newTask);
    this.saveTasksToStorage();
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasksToStorage();
  }

  private saveTasksToStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
