import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  providers: [TasksService],
})
export class TasksModule {}
