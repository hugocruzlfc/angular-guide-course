import { Component, inject, Input } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from '@/app/shared/ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);
  // @Output() completeTask = new EventEmitter<string>();

  // onCompleteTask() {
  //   this.completeTask.emit(this.task.id);
  // }
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
